package org.isa.apijava.service;

import org.isa.apijava.dto.VoteRequest;
import org.isa.apijava.dto.VoteStatusResponse;
import org.isa.apijava.dto.VotingPositionResponse;
import org.springframework.security.oauth2.jwt.Jwt;

import java.util.List;

public interface VotingService {
    List<VotingPositionResponse> getCandidatesByPosition();
    void submitVotes(VoteRequest request, Jwt jwt);
    VoteStatusResponse getVoteStatus(Jwt jwt);
}
