package com.example.finalprojectdb.response;

import com.example.finalprojectdb.entity.Item;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ItemResponse {

    private long id;
    private String title;
    private String description;
    private String imageURL;
    private boolean favorite;
    private int rating;
    private TypeResponse type;

    public ItemResponse(Item item){
        id = item.getId();
        title = item.getTitle();
        description = item.getDescription();
        imageURL = item.getImageURL();
        favorite = item.isFavorite();
        rating = item.getRating();
        type = new TypeResponse(item.getType());
    }
}
