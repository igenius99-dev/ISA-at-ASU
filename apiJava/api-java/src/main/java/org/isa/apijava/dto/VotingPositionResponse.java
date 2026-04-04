package org.isa.apijava.dto;

import java.util.List;
import java.util.UUID;

public class VotingPositionResponse {

    private Long positionId;
    private String code;
    private String name;
    private String category;
    private List<CandidateDto> candidates;

    public VotingPositionResponse() {
    }

    public VotingPositionResponse(Long positionId, String code, String name, String category, List<CandidateDto> candidates) {
        this.positionId = positionId;
        this.code = code;
        this.name = name;
        this.category = category;
        this.candidates = candidates;
    }

    public static class CandidateDto {
        private UUID submissionId;
        private String fullName;
        private String videoUrl;

        public CandidateDto() {
        }

        public CandidateDto(UUID submissionId, String fullName, String email, String videoUrl) {
            this.submissionId = submissionId;
            this.fullName = fullName;
            this.videoUrl = videoUrl;
        }

        public UUID getSubmissionId() {
            return submissionId;
        }

        public void setSubmissionId(UUID submissionId) {
            this.submissionId = submissionId;
        }

        public String getFullName() {
            return fullName;
        }

        public void setFullName(String fullName) {
            this.fullName = fullName;
        }

        public String getVideoUrl() {
            return videoUrl;
        }

        public void setVideoUrl(String videoUrl) {
            this.videoUrl = videoUrl;
        }
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

    public List<CandidateDto> getCandidates() {
        return candidates;
    }

    public void setCandidates(List<CandidateDto> candidates) {
        this.candidates = candidates;
    }
}
