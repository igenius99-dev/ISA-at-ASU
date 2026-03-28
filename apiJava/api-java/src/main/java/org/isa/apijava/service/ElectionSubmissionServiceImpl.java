package org.isa.apijava.service;

import jakarta.transaction.Transactional;
import org.isa.apijava.dto.ElectionSubmissionRequest;
import org.isa.apijava.dto.ElectionSubmissionResponse;
import org.isa.apijava.dto.PositionResponse;
import org.isa.apijava.entity.ElectionSubmission;
import org.isa.apijava.entity.ElectionSubmissionPosition;
import org.isa.apijava.entity.Position;
import org.isa.apijava.repository.ElectionSubmissionPositionRepository;
import org.isa.apijava.repository.ElectionSubmissionRepository;
import org.isa.apijava.repository.PositionRepository;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class ElectionSubmissionServiceImpl implements ElectionSubmissionService {

    private final ElectionSubmissionRepository electionSubmissionRepository;
    private final ElectionSubmissionPositionRepository electionSubmissionPositionRepository;
    private final PositionRepository positionRepository;

    public ElectionSubmissionServiceImpl(
            ElectionSubmissionRepository electionSubmissionRepository,
            ElectionSubmissionPositionRepository electionSubmissionPositionRepository,
            PositionRepository positionRepository
    ) {
        this.electionSubmissionRepository = electionSubmissionRepository;
        this.electionSubmissionPositionRepository = electionSubmissionPositionRepository;
        this.positionRepository = positionRepository;
    }

    @Override
    @Transactional
    public ElectionSubmissionResponse upsertSubmission(ElectionSubmissionRequest request, Jwt jwt) {
        UUID userId = UUID.fromString(jwt.getSubject());
        String email = jwt.getClaimAsString("email");

        validatePositionIds(request.getPositionIds());

        List<Position> positions = positionRepository.findByIdInAndIsActiveTrue(request.getPositionIds());

        if (positions.size() != 3) {
            throw new IllegalArgumentException("All 3 selected positions must be valid and active");
        }

        validateCategoryRules(positions);

        ElectionSubmission submission = electionSubmissionRepository.findByUserId(userId)
                .orElseGet(ElectionSubmission::new);

        submission.setUserId(userId);
        submission.setEmail(email);
        submission.setVideoUrl(request.getVideoUrl());
        submission.setVideoPath(request.getVideoPath());
        submission.setStatus("SUBMITTED");

        ElectionSubmission savedSubmission = electionSubmissionRepository.save(submission);

        electionSubmissionPositionRepository.deleteBySubmission(savedSubmission);

        Map<Long, Position> positionMap = positions.stream()
                .collect(Collectors.toMap(Position::getId, p -> p));

        List<Long> orderedIds = request.getPositionIds();

        for (int i = 0; i < orderedIds.size(); i++) {
            Long positionId = orderedIds.get(i);
            Position position = positionMap.get(positionId);

            ElectionSubmissionPosition submissionPosition = new ElectionSubmissionPosition();
            submissionPosition.setSubmission(savedSubmission);
            submissionPosition.setPosition(position);
            submissionPosition.setPreferenceOrder(i + 1);

            electionSubmissionPositionRepository.save(submissionPosition);
        }

        List<ElectionSubmissionPosition> savedPositions =
                electionSubmissionPositionRepository.findBySubmissionOrderByPreferenceOrderAsc(savedSubmission);

        return mapToResponse(savedSubmission, savedPositions);
    }

    @Override
    public ElectionSubmissionResponse getMySubmission(Jwt jwt) {
        UUID userId = UUID.fromString(jwt.getSubject());

        ElectionSubmission submission = electionSubmissionRepository.findByUserId(userId)
                .orElseThrow(() -> new NoSuchElementException("No submission found"));

        List<ElectionSubmissionPosition> positions =
                electionSubmissionPositionRepository.findBySubmissionOrderByPreferenceOrderAsc(submission);

        return mapToResponse(submission, positions);
    }

    private void validatePositionIds(List<Long> positionIds) {
        if (positionIds == null || positionIds.size() != 3) {
            throw new IllegalArgumentException("Exactly 3 positions must be selected");
        }

        Set<Long> unique = new HashSet<>(positionIds);
        if (unique.size() != 3) {
            throw new IllegalArgumentException("Duplicate positions are not allowed");
        }
    }

    private void validateCategoryRules(List<Position> positions) {
        long eboardCount = positions.stream()
                .filter(p -> "EBOARD".equalsIgnoreCase(p.getCategory()))
                .count();

        long directorCount = positions.stream()
                .filter(p -> "DIRECTOR".equalsIgnoreCase(p.getCategory()))
                .count();

        boolean valid =
                (eboardCount == 2 && directorCount == 1) ||
                        (eboardCount == 1 && directorCount == 2) ||
                        (eboardCount == 0 && directorCount == 3);

        if (!valid) {
            throw new IllegalArgumentException(
                    "Selection must be 2 E-board + 1 Director, 1 E-board + 2 Directors, or 3 Directors"
            );
        }
    }

    @Override
    public List<PositionResponse> getAllPositions() {
        return positionRepository.findByIsActiveTrueOrderByCategoryAscNameAsc()
                .stream()
                .map(position -> new PositionResponse(
                        position.getId(),
                        position.getCode(),
                        position.getName(),
                        position.getCategory()
                ))
                .toList();
    }

    private ElectionSubmissionResponse mapToResponse(
            ElectionSubmission submission,
            List<ElectionSubmissionPosition> submissionPositions
    ) {
        ElectionSubmissionResponse response = new ElectionSubmissionResponse();
        response.setSubmissionId(submission.getId());
        response.setUserId(submission.getUserId());
        response.setEmail(submission.getEmail());
        response.setVideoUrl(submission.getVideoUrl());
        response.setVideoPath(submission.getVideoPath());
        response.setStatus(submission.getStatus());
        response.setCreatedAt(submission.getCreatedAt());
        response.setUpdatedAt(submission.getUpdatedAt());

        List<ElectionSubmissionResponse.SelectedPositionDto> positionDtos = submissionPositions.stream()
                .map(sp -> new ElectionSubmissionResponse.SelectedPositionDto(
                        sp.getPosition().getId(),
                        sp.getPosition().getCode(),
                        sp.getPosition().getName(),
                        sp.getPosition().getCategory(),
                        sp.getPreferenceOrder()
                ))
                .toList();

        response.setPositions(positionDtos);
        return response;
    }
}