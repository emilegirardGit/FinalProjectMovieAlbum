package com.example.finalprojectdb.request;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class ItemRequest {

    @NotBlank
    private String title;
    private String description;
    @NotBlank
    private String imageURL;
    @NotNull
    private boolean favorite;
    @NotNull
    private int rating;
    @NotNull
    @Valid
    private TypeRequest type;
}
