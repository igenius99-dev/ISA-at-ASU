package org.isa.apijava.controller;


import org.isa.apijava.dto.MeResponseDTO;
import org.isa.apijava.service.RoleService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final RoleService roleService;

    public UserController(RoleService roleService) {
        this.roleService = roleService;
    }

    @GetMapping("/me")
    @PreAuthorize("isAuthenticated()")
    public MeResponseDTO returnUser(@AuthenticationPrincipal Jwt jwt) {

        UUID userId = UUID.fromString(jwt.getSubject());

        return new MeResponseDTO(
                userId.toString(),
                roleService.getRolesForUser(userId)
        );
    }
}