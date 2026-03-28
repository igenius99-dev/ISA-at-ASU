package org.isa.apijava.dto;

public class PositionResponse {

    private Long id;
    private String code;
    private String name;
    private String category;

    public PositionResponse() {
    }

    public PositionResponse(Long id, String code, String name, String category) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.category = category;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
}