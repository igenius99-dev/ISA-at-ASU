package org.isa.apijava.entity;

import jakarta.persistence.*;
import java.time.OffsetDateTime;
import java.util.UUID;

@Entity
@Table(
        name = "votes",
        uniqueConstraints = {
                @UniqueConstraint(name = "uq_vote_submission_position", columnNames = {"vote_submission_id", "position_id"})
        }
)
public class Vote {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "vote_submission_id", nullable = false)
    private Long voteSubmissionId;

    @Column(name = "position_id", nullable = false)
    private Integer positionId;

    @Column(name = "candidate_submission_id", nullable = false)
    private UUID candidateSubmissionId;

    @Column(name = "created_at", nullable = false, insertable = false, updatable = false)
    private OffsetDateTime createdAt;

    public UUID getId() {
        return id;
    }

    public Long getVoteSubmissionId() {
        return voteSubmissionId;
    }

    public void setVoteSubmissionId(Long voteSubmissionId) {
        this.voteSubmissionId = voteSubmissionId;
    }

    public Integer getPositionId() {
        return positionId;
    }

    public void setPositionId(Integer positionId) {
        this.positionId = positionId;
    }

    public UUID getCandidateSubmissionId() {
        return candidateSubmissionId;
    }

    public void setCandidateSubmissionId(UUID candidateSubmissionId) {
        this.candidateSubmissionId = candidateSubmissionId;
    }

    public OffsetDateTime getCreatedAt() {
        return createdAt;
    }
}
