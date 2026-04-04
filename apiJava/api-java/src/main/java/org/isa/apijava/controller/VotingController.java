package org.isa.apijava.controller;

import jakarta.validation.Valid;
import org.isa.apijava.dto.VoteRequest;
import org.isa.apijava.dto.VoteStatusResponse;
import org.isa.apijava.dto.VotingPositionResponse;
import org.isa.apijava.service.VotingService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/voting")
public class VotingController {

    private final VotingService votingService;

    public VotingController(VotingService votingService) {
        this.votingService = votingService;
    }

    @GetMapping("/candidates")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<List<VotingPositionResponse>> getCandidatesByPosition() {
        return ResponseEntity.ok(votingService.getCandidatesByPosition());
    }

    @PostMapping("/submit")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<Void> submitVotes(
            @Valid @RequestBody VoteRequest request,
            @AuthenticationPrincipal Jwt jwt
    ) {
        votingService.submitVotes(request, jwt);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/status")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<VoteStatusResponse> getVoteStatus(
            @AuthenticationPrincipal Jwt jwt
    ) {
        return ResponseEntity.ok(votingService.getVoteStatus(jwt));
    }
}
