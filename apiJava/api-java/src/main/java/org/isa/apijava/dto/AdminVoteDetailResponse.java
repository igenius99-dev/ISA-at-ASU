package org.isa.apijava.dto;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.UUID;

public class AdminVoteDetailResponse {

    private UUID voterUserId;
    private String voterName;
    private String voterEmail;
    private OffsetDateTime votedAt;
    private List<VoteChoice> votes;

    public AdminVoteDetailResponse() {}

    public AdminVoteDetailResponse(UUID voterUserId, String voterName, String voterEmail,
                                   OffsetDateTime votedAt, List<VoteChoice> votes) {
        this.voterUserId = voterUserId;
        this.voterName = voterName;
        this.voterEmail = voterEmail;
        this.votedAt = votedAt;
        this.votes = votes;
    }

    public static class VoteChoice {
        private Long positionId;
        private String positionName;
        private String positionCode;
        private String candidateName;
        private UUID candidateSubmissionId;

        public VoteChoice() {}

        public VoteChoice(Long positionId, String positionName, String positionCode,
                          String candidateName, UUID candidateSubmissionId) {
            this.positionId = positionId;
            this.positionName = positionName;
            this.positionCode = positionCode;
            this.candidateName = candidateName;
            this.candidateSubmissionId = candidateSubmissionId;
        }

        public Long getPositionId() { return positionId; }
        public void setPositionId(Long positionId) { this.positionId = positionId; }

        public String getPositionName() { return positionName; }
        public void setPositionName(String positionName) { this.positionName = positionName; }

        public String getPositionCode() { return positionCode; }
        public void setPositionCode(String positionCode) { this.positionCode = positionCode; }

        public String getCandidateName() { return candidateName; }
        public void setCandidateName(String candidateName) { this.candidateName = candidateName; }

        public UUID getCandidateSubmissionId() { return candidateSubmissionId; }
        public void setCandidateSubmissionId(UUID candidateSubmissionId) { this.candidateSubmissionId = candidateSubmissionId; }
    }

    public UUID getVoterUserId() { return voterUserId; }
    public void setVoterUserId(UUID voterUserId) { this.voterUserId = voterUserId; }

    public String getVoterName() { return voterName; }
    public void setVoterName(String voterName) { this.voterName = voterName; }

    public String getVoterEmail() { return voterEmail; }
    public void setVoterEmail(String voterEmail) { this.voterEmail = voterEmail; }

    public OffsetDateTime getVotedAt() { return votedAt; }
    public void setVotedAt(OffsetDateTime votedAt) { this.votedAt = votedAt; }

    public List<VoteChoice> getVotes() { return votes; }
    public void setVotes(List<VoteChoice> votes) { this.votes = votes; }
}
