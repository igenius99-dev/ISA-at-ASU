package org.isa.apijava.repository;

import org.isa.apijava.entity.VoteSubmission;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface VoteSubmissionRepository extends JpaRepository<VoteSubmission, Long> {
    Optional<VoteSubmission> findByUserId(UUID userId);
    boolean existsByUserId(UUID userId);
}
