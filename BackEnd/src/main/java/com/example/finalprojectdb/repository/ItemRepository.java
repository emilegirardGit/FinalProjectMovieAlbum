package com.example.finalprojectdb.repository;

import com.example.finalprojectdb.entity.Item;
import com.example.finalprojectdb.entity.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ItemRepository extends CrudRepository<Item, Long> {

    List<Item> findByUserId(long id);
    void deleteByUserId(long id);
}
