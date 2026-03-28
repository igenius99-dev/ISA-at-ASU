package org.isa.apijava.dto;

import java.util.List;

public class MeResponseDTO {

    private String userId;
    private List<String> roles;

    public MeResponseDTO() {}

    public MeResponseDTO(String userId, List<String> roles) {
        this.userId = userId;
        this.roles = roles;
    }

    public String getUserId() {
        return userId;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }
}