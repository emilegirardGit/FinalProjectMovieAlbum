import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Item from "./Item";
import { useForm } from 'react-hook-form';

function ItemList(){

    const [users, setUsers] = useState([]);
    const [items, setItems] = useState([]);

    const { register, handleSubmit, watch, formState: { errors }} = useForm(); 
    const onSubmit = data => {
        setUsers(data);
        addUser(users);
        console.log(data);
    }

    useEffect(()=>{
        
    },[])

    const loadUsers = ()=>{
        axios.get("http://localhost:8080/api/users")
        .then(response => {
            setUsers(response.data);
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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true })}/>
                <input {...register("lastName", { required: true })} />
                <input {...register("userName", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit"/>
            </form>
            

            <Row>
            {items.map((i) => (
                i.Favorite &&
                <Col xs={3}>
                    <Item key={i.Id} Item={{Title: i.Title, Type: i.Type, ImageURL: i.ImageURL, Description: i.Description, Rating: i.Rating, Favorite: i.Favorite}}/>
                </Col>
            ))}
            </Row>
            <Row>
            {items.map((i) => (
                !i.Favorite &&
                <Col xs={3}>
                    <Item key={i.Id} Item={{Title: i.Title, Type: i.Type, ImageURL: i.ImageURL, Description: i.Description, Rating: i.Rating, Favorite: i.Favorite}}/>
                </Col>
            ))}
            </Row>
        </div>
    )
}

export default ItemList;