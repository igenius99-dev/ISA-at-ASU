package org.isa.apijava.service;

import org.isa.apijava.repository.RoleRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.UUID;

@Service
public class RoleService {

    private final RoleRepository roleRepository;

    public RoleService(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    public Collection<? extends GrantedAuthority> getAuthoritiesForUser(UUID userId) {
        List<GrantedAuthority> authorities = roleRepository.findByUserId(userId)
                .stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role.getRole().toUpperCase()))
                .map(a -> (GrantedAuthority) a)
                .toList();

        return authorities;
    }

    public List<String> getRolesForUser(UUID userId) {
        return roleRepository.findByUserId(userId)
                .stream()
                .map(role -> role.getRole().toUpperCase())
                .toList();
    }
}