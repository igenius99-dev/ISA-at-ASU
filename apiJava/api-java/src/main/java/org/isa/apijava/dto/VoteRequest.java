package org.isa.apijava.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.util.List;
import java.util.UUID;

public class VoteRequest {

    @NotEmpty(message = "At least one vote is required")
    @Valid
    private List<SingleVote> votes;

    public static class SingleVote {

        @NotNull(message = "Position ID is required")
        private Long positionId;

        @NotNull(message = "Candidate submission ID is required")
        private UUID candidateSubmissionId;

        public Long getPositionId() {
            return positionId;
        }

        public void setPositionId(Long positionId) {
            this.positionId = positionId;
        }

        public UUID getCandidateSubmissionId() {
            return candidateSubmissionId;
        }

        public void setCandidateSubmissionId(UUID candidateSubmissionId) {
            this.candidateSubmissionId = candidateSubmissionId;
        }
    }

    public List<SingleVote> getVotes() {
        return votes;
    }

    public void setVotes(List<SingleVote> votes) {
        this.votes = votes;
    }
}
