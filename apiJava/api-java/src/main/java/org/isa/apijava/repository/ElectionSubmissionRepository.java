package org.isa.apijava.repository;

import org.isa.apijava.entity.ElectionSubmission;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ElectionSubmissionRepository extends JpaRepository<ElectionSubmission, UUID> {
    Optional<ElectionSubmission> findByUserId(UUID userId);
    List<ElectionSubmission> findAllByOrderByCreatedAtDesc();

}