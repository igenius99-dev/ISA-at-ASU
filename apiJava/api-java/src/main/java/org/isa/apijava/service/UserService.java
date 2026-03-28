package org.isa.apijava.service;

import org.isa.apijava.dto.AdminResponse;
import org.isa.apijava.entity.ElectionSubmission;
import org.isa.apijava.entity.ElectionSubmissionPosition;
import org.isa.apijava.repository.ElectionSubmissionPositionRepository;
import org.isa.apijava.repository.ElectionSubmissionRepository;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class UserService {

    private final ElectionSubmissionRepository electionSubmissionRepository;
    private final ElectionSubmissionPositionRepository electionSubmissionPositionRepository;

    public UserService(
            ElectionSubmissionRepository electionSubmissionRepository,
            ElectionSubmissionPositionRepository electionSubmissionPositionRepository
    ) {
        this.electionSubmissionRepository = electionSubmissionRepository;
        this.electionSubmissionPositionRepository = electionSubmissionPositionRepository;
    }

    public List<AdminResponse> getAllUserSubmissions() {
        List<ElectionSubmission> submissions = electionSubmissionRepository.findAllByOrderByCreatedAtDesc();

        if (submissions.isEmpty()) {
            return List.of();
        }

        List<UUID> submissionIds = submissions.stream()
                .map(ElectionSubmission::getId)
                .toList();

        List<ElectionSubmissionPosition> allPositions =
                electionSubmissionPositionRepository.findBySubmissionIdInOrderBySubmissionIdAscPreferenceOrderAsc(submissionIds);

        Map<UUID, List<ElectionSubmissionPosition>> positionsBySubmissionId = allPositions.stream()
                .collect(Collectors.groupingBy(
                        sp -> sp.getSubmission().getId(),
                        LinkedHashMap::new,
                        Collectors.toList()
                ));

        return submissions.stream()
                .map(submission -> mapToResponse(
                        submission,
                        positionsBySubmissionId.getOrDefault(submission.getId(), List.of())
                ))
                .toList();
    }

    private AdminResponse mapToResponse(
            ElectionSubmission submission,
            List<ElectionSubmissionPosition> submissionPositions
    ) {
        AdminResponse response = new AdminResponse();
        response.setSubmissionId(submission.getId());
        response.setUserId(submission.getUserId());
        response.setFullName(submission.getFullName());
        response.setEmail(submission.getEmail());
        response.setVideoUrl(submission.getVideoUrl());
        response.setVideoPath(submission.getVideoPath());
        response.setStatus(submission.getStatus());
        response.setCreatedAt(submission.getCreatedAt());
        response.setUpdatedAt(submission.getUpdatedAt());

        List<AdminResponse.SelectedPositionDto> positionDtos = submissionPositions.stream()
                .map(sp -> new AdminResponse.SelectedPositionDto(
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