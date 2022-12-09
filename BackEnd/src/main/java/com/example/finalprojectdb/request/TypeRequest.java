package com.example.finalprojectdb.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class TypeRequest {

    @NotBlank
    private String type;
}
