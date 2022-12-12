package com.example.finalprojectdb.service;

import com.example.finalprojectdb.entity.Item;
import com.example.finalprojectdb.entity.User;
import com.example.finalprojectdb.exception.ResourceNotFound;
import com.example.finalprojectdb.repository.ItemRepository;
import com.example.finalprojectdb.repository.UserRepository;
import com.example.finalprojectdb.request.ItemRequest;
import com.example.finalprojectdb.request.UserRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    ItemRepository itemRepository;

    @Autowired
    UserRepository userRepository;

    public Item addItemToUser(long userId, ItemRequest itemRequest){
        User user = userRepository.findById(userId)
                .orElseThrow(()->new ResourceNotFound("User not found"));
        Item itemToBeAdded = new Item(itemRequest);
        itemToBeAdded.setUser(user);
        return itemRepository.save(itemToBeAdded);
    }
    public List<User> getAllUsers(String userName){
        if(userName == null || userName.isEmpty())
            return (List<User>) userRepository.findAll();
        return userRepository.findAllByUserNameIgnoreCase(userName);
    }

    public List<Item> getAllItems(long userId){
        return itemRepository.findByUserId(userId);
    }
    public User addUser(UserRequest userRequest){
        User savedUser = userRepository.save(new User(userRequest));
        return savedUser;
    }

    public User updateUser(long userId, UserRequest userRequest){
        itemRepository.findById(userId).orElseThrow(()->new ResourceNotFound("Id is not found"));
        User userToBeUpdated = new User(userRequest);
        userToBeUpdated.setId(userId);
        return userRepository.save(userToBeUpdated);
    }

    public void deleteAllItems(long userId){

        if(userRepository.existsById(userId))
            itemRepository.deleteAllByUserId(userId);
        else
            throw new ResourceNotFound("User id not found");
    }
    public void deleteUser(long userId){

        if(userRepository.existsById(userId))
            userRepository.deleteById(userId);
        else
            throw new ResourceNotFound("User id not found");
    }
}
