package org.isa.apijava.service;

import jakarta.transaction.Transactional;
import org.isa.apijava.dto.VoteRequest;
import org.isa.apijava.dto.VoteStatusResponse;
import org.isa.apijava.dto.VotingPositionResponse;
import org.isa.apijava.entity.*;
import org.isa.apijava.repository.*;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class VotingServiceImpl implements VotingService {

    private final PositionRepository positionRepository;
    private final ElectionSubmissionRepository electionSubmissionRepository;
    private final ElectionSubmissionPositionRepository electionSubmissionPositionRepository;
    private final VoteSubmissionRepository voteSubmissionRepository;
    private final VoteRepository voteRepository;

    public VotingServiceImpl(
            PositionRepository positionRepository,
            ElectionSubmissionRepository electionSubmissionRepository,
            ElectionSubmissionPositionRepository electionSubmissionPositionRepository,
            VoteSubmissionRepository voteSubmissionRepository,
            VoteRepository voteRepository
    ) {
        this.positionRepository = positionRepository;
        this.electionSubmissionRepository = electionSubmissionRepository;
        this.electionSubmissionPositionRepository = electionSubmissionPositionRepository;
        this.voteSubmissionRepository = voteSubmissionRepository;
        this.voteRepository = voteRepository;
    }

    @Override
    public List<VotingPositionResponse> getCandidatesByPosition() {
        List<Position> activePositions = positionRepository.findByIsActiveTrueOrderByCategoryAscNameAsc();

        List<ElectionSubmission> approvedSubmissions =
                electionSubmissionRepository.findByStatus("APPROVED");

        if (approvedSubmissions.isEmpty()) {
            return activePositions.stream()
                    .map(pos -> new VotingPositionResponse(
                            pos.getId(), pos.getCode(), pos.getName(), pos.getCategory(), List.of()
                    ))
                    .toList();
        }

        List<UUID> submissionIds = approvedSubmissions.stream()
                .map(ElectionSubmission::getId)
                .toList();

        List<ElectionSubmissionPosition> allEsp =
                electionSubmissionPositionRepository.findBySubmissionIdInOrderBySubmissionIdAscPreferenceOrderAsc(submissionIds);

        Map<Long, List<ElectionSubmission>> candidatesByPosition = new LinkedHashMap<>();
        for (ElectionSubmissionPosition esp : allEsp) {
            Long posId = esp.getPosition().getId();
            candidatesByPosition
                    .computeIfAbsent(posId, k -> new ArrayList<>())
                    .add(esp.getSubmission());
        }

        return activePositions.stream()
                .map(pos -> {
                    List<ElectionSubmission> candidates =
                            candidatesByPosition.getOrDefault(pos.getId(), List.of());

                    List<VotingPositionResponse.CandidateDto> candidateDtos = candidates.stream()
                            .map(sub -> new VotingPositionResponse.CandidateDto(
                                    sub.getId(),
                                    sub.getFullName(),
                                    sub.getEmail(),
                                    sub.getVideoUrl()
                            ))
                            .toList();

                    return new VotingPositionResponse(
                            pos.getId(), pos.getCode(), pos.getName(), pos.getCategory(), candidateDtos
                    );
                })
                .toList();
    }

    @Override
    @Transactional
    public void submitVotes(VoteRequest request, Jwt jwt) {
        UUID userId = UUID.fromString(jwt.getSubject());

        if (voteSubmissionRepository.existsByUserId(userId)) {
            throw new IllegalArgumentException("You have already submitted your votes");
        }

        List<VoteRequest.SingleVote> votes = request.getVotes();

        Set<Long> positionIds = votes.stream()
                .map(VoteRequest.SingleVote::getPositionId)
                .collect(Collectors.toSet());

        if (positionIds.size() != votes.size()) {
            throw new IllegalArgumentException("Duplicate position votes are not allowed");
        }

        Set<UUID> candidateIds = votes.stream()
                .map(VoteRequest.SingleVote::getCandidateSubmissionId)
                .collect(Collectors.toSet());

        List<ElectionSubmission> candidates =
                electionSubmissionRepository.findAllById(candidateIds);

        if (candidates.size() != candidateIds.size()) {
            throw new IllegalArgumentException("One or more candidate submissions not found");
        }

        boolean allApproved = candidates.stream()
                .allMatch(c -> "APPROVED".equals(c.getStatus()));

        if (!allApproved) {
            throw new IllegalArgumentException("All candidates must have APPROVED status");
        }

        VoteSubmission voteSubmission = new VoteSubmission();
        voteSubmission.setUserId(userId);
        VoteSubmission savedSubmission = voteSubmissionRepository.save(voteSubmission);

        for (VoteRequest.SingleVote sv : votes) {
            Vote vote = new Vote();
            vote.setVoteSubmissionId(savedSubmission.getId());
            vote.setPositionId(sv.getPositionId().intValue());
            vote.setCandidateSubmissionId(sv.getCandidateSubmissionId());
            voteRepository.save(vote);
        }
    }

    @Override
    public VoteStatusResponse getVoteStatus(Jwt jwt) {
        UUID userId = UUID.fromString(jwt.getSubject());
        boolean hasVoted = voteSubmissionRepository.existsByUserId(userId);
        return new VoteStatusResponse(hasVoted);
    }
}
