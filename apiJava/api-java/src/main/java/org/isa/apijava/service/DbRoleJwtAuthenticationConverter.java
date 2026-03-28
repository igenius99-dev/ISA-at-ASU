package org.isa.apijava.service;

import org.springframework.core.convert.converter.Converter;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class DbRoleJwtAuthenticationConverter implements Converter<Jwt, AbstractAuthenticationToken> {

    private final RoleService roleService;

    public DbRoleJwtAuthenticationConverter(RoleService roleService) {
        this.roleService = roleService;
    }

    @Override
    public AbstractAuthenticationToken convert(Jwt jwt) {
        String subject = jwt.getSubject();
        UUID userId = UUID.fromString(subject);

        var authorities = roleService.getAuthoritiesForUser(userId);

        return new JwtAuthenticationToken(jwt, authorities, subject);
    }
}