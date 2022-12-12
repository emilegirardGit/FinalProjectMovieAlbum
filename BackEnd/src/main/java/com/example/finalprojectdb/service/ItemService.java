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

    public Item getItem(long itemId){

        return itemRepository.findById(itemId)
                .orElseThrow(()->new ResourceNotFound("Item id not found"));
    }

    public Item updateItem(long itemId, ItemRequest itemRequest){

        if(itemRepository.existsById(itemId)) {
            Item itemToBeUpdated = new Item(itemRequest);
            itemToBeUpdated.setId(itemId);
            return itemRepository.save(itemToBeUpdated);
        }
        else
            throw new ResourceNotFound("Item id not found");
    }

    public void deleteItem(long itemId){

        if (itemRepository.existsById(itemId))
        {
            itemRepository.deleteById(itemId);
        }
        else
            throw new ResourceNotFound("Item id not found");
    }

}
