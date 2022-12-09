package com.example.finalprojectdb.entity;

import com.example.finalprojectdb.request.UserRequest;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name="Users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String firstName;
    @Column(nullable = false)
    private String lastName;
    @Column(nullable = false)
    private String userName;

    public User(UserRequest userRequest){
        firstName = userRequest.getFirstName();
        lastName = userRequest.getLastName();
        userName = userRequest.getUserName();
    }
}
