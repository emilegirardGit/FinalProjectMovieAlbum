package com.example.finalprojectdb.service;

import com.example.finalprojectdb.entity.Item;
import com.example.finalprojectdb.entity.User;
import com.example.finalprojectdb.exception.ResourceNotFound;
import com.example.finalprojectdb.repository.ItemRepository;
import com.example.finalprojectdb.repository.UserRepository;
import com.example.finalprojectdb.request.ItemRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {
    @Autowired
    ItemRepository itemRepository;

}
