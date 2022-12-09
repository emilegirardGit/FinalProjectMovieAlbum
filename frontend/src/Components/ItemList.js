import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Item from "./Item";
import { useForm } from 'react-hook-form';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

function ItemList(){

    {//const [users, setUsers] = useState([]);
    //const [items, setItems] = useState([]);
    }

    const [rating, setRating] = useState(0)

    const users = [];
    
    const items = [{Id: 1, Title: "titanic", Type: 1, ImageURL: "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png", Description: "desc", Rating: 3, Favorite: true},
    {Id: 1, Title: "titanic", Type: 1, ImageURL: "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png", Description: "desc", Rating: 3, Favorite: true},
    {Id: 1, Title: "titanic", Type: 1, ImageURL: "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png", Description: "desc", Rating: 3, Favorite: true}];

    const { register, handleSubmit, formState: { errors }} = useForm();
    const { register: register2, handleSubmit: handleSubmit2, formState: { errors: errors2 }} = useForm();  
    const submitNewUser = data => {
        {//setUsers(data);
        //ddUser(users);
    }
    console.log("test1");
}
    const submitNewItem = data => {
        console.log("test2");
    }

    useEffect(()=>{
        console.log(rating);
    },[rating])

    const loadUsers = ()=>{
        axios.get("http://localhost:8080/api/users")
        .then(response => {
            {//setUsers(response.data);
            }
        });
    }

    const addUser = (user)=>{
        axios.post("http://localhost:8080/api/users", user)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return(
        <div className=" bgcolor">
            <div className="items">

            <Row>
            {items.map((i) => (
                i.Favorite &&
                <Col lg="auto" md="auto" sm="auto">
                    <Item key={i.Id} Item={{Title: i.Title, Type: i.Type, ImageURL: i.ImageURL, Description: i.Description, Rating: i.Rating, Favorite: i.Favorite}}/>
                </Col>
            ))}
            <Col>
            
            </Col>
            </Row>
            <Row>
            {items.map((i) => (
                !i.Favorite &&
                <Col>
                    <Item className="item" key={i.Id} Item={{Title: i.Title, Type: i.Type, ImageURL: i.ImageURL, Description: i.Description, Rating: i.Rating, Favorite: i.Favorite}}/>
                </Col>
            ))}
            </Row>

            </div>
            <div className="form">

            <Row>
            <div className="addUser forms">
                <h3>Add User</h3>
                <form className="float-right" onSubmit={handleSubmit(submitNewUser)}>
                    <label>First Name</label><br/>
                    <input {...register("firstName", { required: true })}/>
                    {errors.firstName && <span>This field is required</span>} <br/>
                    <label>Last Name</label><br/>
                    <input {...register("lastName", { required: true })} />
                    {errors.lastName && <span>This field is required</span>} <br/>
                    <label>User Name</label><br/>
                    <input {...register("userName", { required: true })} />
                    {errors.userName && <span>This field is required</span>} <br/>
                    <input className="button rounded-pill" type="submit" value="Add User"/>
                </form>
            </div>
            </Row>
            <Row>
            <div className="addUser forms">
                <h3>Add Item</h3>
                <form onSubmit={handleSubmit2(submitNewItem)}>
                    <label>Title</label><br/>
                    <input {...register2("title", { required: true })}/>
                    {errors2.title && <span>This field is required</span>} <br/>
                    <label>Description</label><br/>
                    <input {...register2("description", { required: true })} />
                    {errors2.description && <span>This field is required</span>} <br/>
                    <label>Image URL</label><br/>
                    <input {...register2("imageURL", { required: true })} />
                    {errors2.imageURL && <span>This field is required</span>} <br/>
                    <Rating style={{ maxWidth: 150 }} value={rating} onChange={setRating} />
                    <input className="button rounded-pill" type="submit" value="Add Item"/>
                </form>
            </div>
            </Row>

            </div>
        </div>
    )
}

export default ItemList;