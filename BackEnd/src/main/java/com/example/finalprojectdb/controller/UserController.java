package com.example.finalprojectdb.controller;

import com.example.finalprojectdb.entity.User;
import com.example.finalprojectdb.request.ItemRequest;
import com.example.finalprojectdb.request.UserRequest;
import com.example.finalprojectdb.response.ItemResponse;
import com.example.finalprojectdb.response.UserResponse;
import com.example.finalprojectdb.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping()
    public List<UserResponse> getAllUsers(@RequestParam(required = false) String userName){

        List<User> users = userService.getAllUsers(userName);
        List<UserResponse> userResponses = new ArrayList<>();

        users.forEach(user -> {
            userResponses.add(new UserResponse(user));
        });
        return userResponses;
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public UserResponse addUser(@Valid @RequestBody UserRequest userRequest){
        User userSaved = userService.addUser(userRequest);
        return new UserResponse(userSaved);
    }
    @PostMapping("/{userId}/items")
    public ItemResponse addItem(
            @PathVariable long userId,
            @Valid @RequestBody ItemRequest itemRequest
    ){
        return new ItemResponse(
                userService.addItemToUser(userId, itemRequest));
    }

    @PutMapping("/{id}")
    public UserResponse updateUser(@PathVariable long id, @Valid @RequestBody UserRequest userRequest){
        User updatedUser = userService.updateUser(id, userRequest);
        return new UserResponse(updatedUser);
    }

    @DeleteMapping("/{id}")
    public  void deleteUser(@PathVariable long id){
        userService.deleteUser(id);
    }

}
