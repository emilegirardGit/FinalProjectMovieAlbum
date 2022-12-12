package com.example.finalprojectdb.repository;

import com.example.finalprojectdb.entity.Item;
import com.example.finalprojectdb.entity.User;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface ItemRepository extends CrudRepository<Item, Long> {

    public List<Item> findByUserId(long id);
    @Transactional
    void deleteAllByUserId(long id);
}
