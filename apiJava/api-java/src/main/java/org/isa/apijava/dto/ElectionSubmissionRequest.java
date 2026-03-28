package org.isa.apijava.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

import java.util.List;

public class ElectionSubmissionRequest {

    @NotEmpty(message = "Exactly 3 positions must be selected")
    @Size(min = 3, max = 3, message = "Exactly 3 positions must be selected")
    private List<Long> positionIds;

    @NotBlank(message = "Video URL is required")
    private String videoUrl;

    @NotBlank(message = "Video path is required")
    private String videoPath;

    public List<Long> getPositionIds() {
        return positionIds;
    }

    public void setPositionIds(List<Long> positionIds) {
        this.positionIds = positionIds;
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
}