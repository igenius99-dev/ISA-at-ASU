package org.isa.apijava.dto;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.UUID;

public class AdminResponse {

    private UUID submissionId;
    private UUID userId;
    private String fullName;
    private String email;
    private String videoUrl;
    private String videoPath;
    private String status;
    private OffsetDateTime createdAt;
    private OffsetDateTime updatedAt;
    private List<SelectedPositionDto> positions;

    public static class SelectedPositionDto {
        private Long positionId;
        private String code;
        private String name;
        private String category;
        private Integer preferenceOrder;

        public SelectedPositionDto() {
        }

        public SelectedPositionDto(Long positionId, String code, String name, String category, Integer preferenceOrder) {
            this.positionId = positionId;
            this.code = code;
            this.name = name;
            this.category = category;
            this.preferenceOrder = preferenceOrder;
        }

        public Long getPositionId() {
            return positionId;
        }

        public void setPositionId(Long positionId) {
            this.positionId = positionId;
        }

        public String getCode() {
            return code;
        }

        public void setCode(String code) {
            this.code = code;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getCategory() {
            return category;
        }

        public void setCategory(String category) {
            this.category = category;
        }

        public Integer getPreferenceOrder() {
            return preferenceOrder;
        }

        public void setPreferenceOrder(Integer preferenceOrder) {
            this.preferenceOrder = preferenceOrder;
        }
    }

    public UUID getSubmissionId() {
        return submissionId;
    }

    public void setSubmissionId(UUID submissionId) {
        this.submissionId = submissionId;
    }

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    public String getVideoPath() {
        return videoPath;
    }

    public void setVideoPath(String videoPath) {
        this.videoPath = videoPath;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public OffsetDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public OffsetDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public List<SelectedPositionDto> getPositions() {
        return positions;
    }

    public void setPositions(List<SelectedPositionDto> positions) {
        this.positions = positions;
    }
}