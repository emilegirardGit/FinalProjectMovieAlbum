package com.example.finalprojectdb.entity;

import com.example.finalprojectdb.request.TypeRequest;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.Value;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name="types")
public class Type {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name="type")
    private String type;

    public Type(TypeRequest typeRequest){
        type = typeRequest.getType();
    }
}
