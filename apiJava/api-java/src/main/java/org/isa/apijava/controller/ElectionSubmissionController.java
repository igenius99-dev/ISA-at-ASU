package org.isa.apijava.controller;

import jakarta.validation.Valid;
import org.isa.apijava.dto.ElectionCheckResponse;
import org.isa.apijava.dto.ElectionSubmissionRequest;
import org.isa.apijava.dto.ElectionSubmissionResponse;
import org.isa.apijava.dto.PositionResponse;
import org.isa.apijava.service.ElectionSubmissionService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/elections")
public class ElectionSubmissionController {

    private final ElectionSubmissionService electionSubmissionService;


    public ElectionSubmissionController(ElectionSubmissionService electionSubmissionService) {
        this.electionSubmissionService = electionSubmissionService;
    }

    @GetMapping("/positions")
    public ResponseEntity<List<PositionResponse>> getPositions() {
        return ResponseEntity.ok(electionSubmissionService.getAllPositions());
    }

    @PutMapping("/me")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<ElectionSubmissionResponse> upsertMySubmission(
            @Valid @RequestBody ElectionSubmissionRequest request,
            @AuthenticationPrincipal Jwt jwt
    ) {
        ElectionSubmissionResponse response = electionSubmissionService.upsertSubmission(request, jwt);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/me")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<ElectionSubmissionResponse> getMySubmission(
            @AuthenticationPrincipal Jwt jwt
    ) {
        ElectionSubmissionResponse response = electionSubmissionService.getMySubmission(jwt);
        return ResponseEntity.ok(response);
    }

}