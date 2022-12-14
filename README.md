# Movie Tv-Show And Music Album

## Description:
My project is a album the user can add a user and select it after they are added to the database. The selected user than show the apropriate album for this user. So, if someone what to have a certain user for a certain group of music or film. They can do it. They add they add items on a user than show right after it been added. The user can also select the favorite button to set this certain item as their favorite. Then, this item is being render at the top of the screen for better visibility. They can also delete the item. I had a hard time getting everything working togheter with the backend and frontend, but I figure out how to make it.

## Design:
I have three entity class for my project. The first one is the user entity this entity is use to store the user of the page. Next, it's the item entity this one is a many-to-one relationship with the user class so this mean that the user can have many item. And finaly the last entity is one-to-one relationship with the item class to have a type entity. This entity is used to get the time of item they want.

### Database Desing

### End-points

http://localhost:8080/api/user  
http://localhost:8080/api/user/{userId}  
http://localhost:8080/api/user/{userId}/items  
http://localhost:8080/api/items/{itemId}

### Screenshots

![Fullscreen]


