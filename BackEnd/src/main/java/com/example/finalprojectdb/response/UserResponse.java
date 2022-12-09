package com.example.finalprojectdb.response;

import com.example.finalprojectdb.entity.User;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponse {

    private long id;

    private String firstName;

    private String lastName;

    private String userName;


    public UserResponse(User user){
        id = user.getId();
        firstName = user.getFirstName();
        lastName = user.getLastName();
        userName = user.getUserName();
    }
}
