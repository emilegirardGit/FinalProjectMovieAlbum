package com.example.finalprojectdb.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class UserRequest {

    @NotBlank
    private String firstName;
    @NotBlank
    private  String lastName;
    @NotBlank
    private String userName;
}
