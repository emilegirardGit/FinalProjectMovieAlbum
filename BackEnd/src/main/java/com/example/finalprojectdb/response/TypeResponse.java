package com.example.finalprojectdb.response;

import com.example.finalprojectdb.entity.Type;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TypeResponse {

    private Long id;
    private String type;

    public TypeResponse(Type type){

        id = type.getId();
        this.type = type.getType();
    }
}
