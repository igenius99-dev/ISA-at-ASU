package org.isa.apijava.entity;

import jakarta.persistence.*;

import java.time.OffsetDateTime;

@Entity
@Table(
        name = "election_submission_positions",
        schema = "public",
        uniqueConstraints = {
                @UniqueConstraint(name = "uq_submission_position", columnNames = {"submission_id", "position_id"}),
                @UniqueConstraint(name = "uq_submission_preference", columnNames = {"submission_id", "preference_order"})
        }
)
public class ElectionSubmissionPosition {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "submission_id", nullable = false)
    private ElectionSubmission submission;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "position_id", nullable = false)
    private Position position;

    @Column(name = "preference_order", nullable = false)
    private Integer preferenceOrder;

    @Column(name = "created_at", insertable = false, updatable = false)
    private OffsetDateTime createdAt;

    public Long getId() {
        return id;
    }

    public ElectionSubmission getSubmission() {
        return submission;
    }

    public void setSubmission(ElectionSubmission submission) {
        this.submission = submission;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public Integer getPreferenceOrder() {
        return preferenceOrder;
    }

    public void setPreferenceOrder(Integer preferenceOrder) {
        this.preferenceOrder = preferenceOrder;
    }

    public OffsetDateTime getCreatedAt() {
        return createdAt;
    }
}