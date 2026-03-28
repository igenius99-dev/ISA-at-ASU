package org.isa.apijava.service;

import org.isa.apijava.dto.ElectionSubmissionRequest;
import org.isa.apijava.dto.ElectionSubmissionResponse;
import org.isa.apijava.dto.PositionResponse;
import org.springframework.security.oauth2.jwt.Jwt;

import java.util.List;

public interface ElectionSubmissionService {
    ElectionSubmissionResponse upsertSubmission(ElectionSubmissionRequest request, Jwt jwt);
    ElectionSubmissionResponse getMySubmission(Jwt jwt);
    List<PositionResponse> getAllPositions();
}