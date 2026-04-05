package org.isa.apijava.repository;

import org.isa.apijava.entity.Vote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;
import java.util.UUID;

public interface VoteRepository extends JpaRepository<Vote, UUID> {
    List<Vote> findByVoteSubmissionIdIn(Collection<Long> voteSubmissionIds);
}
