package org.isa.apijava.controller;


import org.isa.apijava.dto.AdminResponse;
import org.isa.apijava.dto.AdminVoteDetailResponse;
import org.isa.apijava.service.UserService;
import org.isa.apijava.service.VotingService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@PreAuthorize("isAuthenticated()")
public class AdminController {

    private final UserService userService;
    private final VotingService votingService;

    public AdminController(UserService userService, VotingService votingService) {
        this.userService = userService;
        this.votingService = votingService;
    }

    @GetMapping("/submissions")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<AdminResponse>> getAllSubmissions() {
        return ResponseEntity.ok(userService.getAllUserSubmissions());
    }

    @GetMapping("/votes")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<AdminVoteDetailResponse>> getAllVoteDetails() {
        return ResponseEntity.ok(votingService.getAllVoteDetails());
    }
}
