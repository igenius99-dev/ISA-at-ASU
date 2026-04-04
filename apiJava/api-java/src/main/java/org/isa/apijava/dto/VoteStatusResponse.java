package org.isa.apijava.dto;

public class VoteStatusResponse {

    private boolean hasVoted;

    public VoteStatusResponse() {
    }

    public VoteStatusResponse(boolean hasVoted) {
        this.hasVoted = hasVoted;
    }

    public boolean isHasVoted() {
        return hasVoted;
    }

    public void setHasVoted(boolean hasVoted) {
        this.hasVoted = hasVoted;
    }
}
