package com.example.finalprojectdb.entity;

import com.example.finalprojectdb.request.ItemRequest;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Table(name="items")
@Getter
@Setter
@NoArgsConstructor
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name="Title", nullable = false)
    private String title;
    @Column(name="Description")
    private String description;
    @Column(name="ImageURL", nullable = false)
    private String imageURL;
    @Column(name="Favorite", nullable = false)
    private boolean favorite;
    @Column(name="Rating")
    private int rating;
    @OneToOne(cascade = CascadeType.ALL, optional = false)
    private Type type;

    @ManyToOne(optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "user_id")
    private User user;

    public Item(ItemRequest itemRequest){
        title = itemRequest.getTitle();
        description = itemRequest.getDescription();
        imageURL = itemRequest.getImageURL();
        favorite = itemRequest.isFavorite();
        rating = itemRequest.getRating();
        type = new Type(itemRequest.getType());

    }

}
