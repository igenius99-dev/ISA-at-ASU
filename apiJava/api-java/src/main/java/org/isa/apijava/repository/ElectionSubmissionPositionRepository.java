package org.isa.apijava.repository;

import org.isa.apijava.entity.ElectionSubmission;
import org.isa.apijava.entity.ElectionSubmissionPosition;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ElectionSubmissionPositionRepository extends JpaRepository<ElectionSubmissionPosition, Long> {
    List<ElectionSubmissionPosition> findBySubmissionOrderByPreferenceOrderAsc(ElectionSubmission submission);
    void deleteBySubmission(ElectionSubmission submission);
    List<ElectionSubmissionPosition> findBySubmissionIdInOrderBySubmissionIdAscPreferenceOrderAsc(List<UUID> submissionIds);
}