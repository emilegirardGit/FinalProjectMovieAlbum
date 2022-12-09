package com.example.finalprojectdb.repository;

import com.example.finalprojectdb.entity.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Long> {

    public List<User> findAllByUserNameIgnoreCase(String UserName);
}
