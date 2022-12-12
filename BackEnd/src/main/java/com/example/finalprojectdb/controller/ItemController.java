package com.example.finalprojectdb.controller;

import com.example.finalprojectdb.request.ItemRequest;
import com.example.finalprojectdb.response.ItemResponse;
import com.example.finalprojectdb.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/items")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping("/{itemId}")
    public ItemResponse getItem(@PathVariable long itemId){

        return new ItemResponse(itemService.getItem(itemId));
    }

    @PutMapping("/{itemId}")
    public ItemResponse updateItem(@PathVariable long itemId, @Valid @RequestBody ItemRequest itemRequest){

        return new ItemResponse(itemService.updateItem(itemId,itemRequest));
    }

    @DeleteMapping("{itemId}")
    public void deleteItem(@PathVariable long itemId){
        itemService.deleteItem(itemId);
    }

}
