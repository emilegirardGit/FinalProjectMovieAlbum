import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Item from "./Item";
import { useForm } from "react-hook-form";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

function ItemList() {
  const [Users, setUsers] = useState([]);
  const [items, setItems] = useState([]);

  const [rating, setRating] = useState(0);

  const [selectedUser, setSelectedUser] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm();
  const submitNewUser = (data) => {
    addUser({
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
    });
  };
  const submitNewItem = (data) => {
    console.log(selectedUser);
    if (selectedUser >= 1) {
      addItem(
        {
          title: data.title,
          description: data.description,
          imageURL: data.imageURL,
          favorite: false,
          rating: rating,
          type: {
            type: data.type,
          },
        },
        selectedUser
      );
    } else {
      alert("Please select a user");
    }
  };

  const changeUser = (data) => {
    setSelectedUser(data);
    getItems(data);
  };

  const getUsers = () => {
    axios
      .get("http://localhost:8080/api/users")
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getItems = (userId) => {
    if (userId >= 1) {
      axios
        .get("http://localhost:8080/api/users/" + userId + "/items")
        .then((response) => {
          console.log(response);
          setItems(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else setItems([]);
  };

  const addUser = (user) => {
    axios
      .post("http://localhost:8080/api/users", user)
      .then((response) => {
        console.log(response);
        getUsers();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateFavorite = (itemId) => {
    axios.get("http://localhost:8080/api/items/" + itemId).then((response) => {
      const temp = {
        title: response.data.title,
        description: response.data.description,
        imageURL: response.data.imageURL,
        favorite: !response.data.favorite,
        rating: response.data.rating,
        type: {
          type: response.data.type.type,
        },
      };
      console.log(temp);
      deleteItem(itemId);
      addItem(temp, selectedUser);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const addItem = (item, userId) => {
    axios
      .post("http://localhost:8080/api/users/" + userId + "/items", item)
      .then((response) => {
        console.log(response);
        getItems(userId);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteItem = (itemId) => {
    axios
      .delete("http://localhost:8080/api/items/" + itemId)
      .then((response) => {
        console.log(response);
        getItems(selectedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteUser = (userId) => {
    axios.delete("http://localhost:8080/api/users/" + userId)
      .then((response) => {
        console.log(response);
        getUsers();
      })
      .catch((error) => { console.log(error) });
  }

  return (
    <div>
      <h1 className="text-center m-5">Album</h1>
      <Container>
        <Row>
          <Col md="auto">
            <div className="forms m-2">
              <Row>
                <div className="m-2">
                  <label>Select user:</label>
                  <select onChange={(e) => changeUser(e.currentTarget.value)}>
                    <option value="0">Select</option>
                    {Users.map((user) => (
                      <option key={user.id} value={user.id}>{user.userName}</option>
                    ))}
                  </select>
                </div>
              </Row>
              <Row>
                <div className="m-2">
                  <label>Delete Selected User:</label>
                  <button  className="m-2"onClick={()=>deleteUser(selectedUser)}>Delete</button>
                </div>
              </Row>
              <Row>
                <div>
                  <h3>Add User</h3>
                  <form
                    className="float-right"
                    onSubmit={handleSubmit(submitNewUser)}
                  >
                    <label>First Name</label>{" "}
                    {errors.firstName && <span>This field is required</span>}{" "}
                    <br />
                    <input {...register("firstName", { required: true })} />
                    <br />
                    <label>Last Name</label>{" "}
                    {errors.lastName && <span>This field is required</span>}{" "}
                    <br />
                    <input {...register("lastName", { required: true })} />
                    <br />
                    <label>User Name</label>{" "}
                    {errors.userName && <span>This field is required</span>}{" "}
                    <br />
                    <input {...register("userName", { required: true })} />
                    <br />
                    <input
                      className="button rounded-pill"
                      type="submit"
                      value="Add User"
                    />
                  </form>
                </div>
              </Row>
              <Row>
                <div>
                  <h3>Add Item</h3>
                  <form onSubmit={handleSubmit2(submitNewItem)}>
                    <label>Title</label>{" "}
                    {errors2.title && <span>This field is required</span>}{" "}
                    <br />
                    <input {...register2("title", { required: true })} />
                    <br />
                    <label>Description</label>
                    {errors2.description && (
                      <span>This field is required</span>
                    )}{" "}
                    <br />
                    <input {...register2("description", { required: true })} />
                    <br />
                    <label>Image URL</label>{" "}
                    {errors2.imageURL && <span>This field is required</span>}{" "}
                    <br />
                    <input {...register2("imageURL", { required: true })} />
                    <br />
                    <select
                      className="mt-2"
                      {...register2("type", { required: true })}
                    >
                      <option value="Movie">Movie</option>
                      <option value="Tv-Show">Tv-Show</option>
                      <option value="Music">Music</option>
                    </select>
                    <Rating
                      isRequired
                      className="m-auto mt-2"
                      style={{ maxWidth: 150 }}
                      value={rating}
                      onChange={setRating}
                    />
                    <input
                      className="button rounded-pill"
                      type="submit"
                      value="Add Item"
                    />
                  </form>
                </div>
              </Row>
            </div>
          </Col>
          <Col>
            <Row>
              {items.map(
                (i) =>
                  i.favorite && (
                    <Col lg={3} sm={6}>
                      <Item
                        key={i.id}
                        item={{
                          Id: i.id,
                          Title: i.title,
                          Description: i.description,
                          ImageURL: i.imageURL,
                          Favorite: i.favorite,
                          Rating: i.rating,
                          Type: i.type,
                        }}
                        deleteItem={deleteItem}
                        updateFavorite={updateFavorite}
                      />
                    </Col>
                  )
              )}
            </Row>
            <Row>
              {items.map(
                (i) =>
                  !i.favorite && (
                    <Col lg={3} sm={6}>
                      <Item
                        key={i.id}
                        item={{
                          Id: i.id,
                          Title: i.title,
                          Description: i.description,
                          ImageURL: i.imageURL,
                          Favorite: i.favorite,
                          Rating: i.rating,
                          Type: i.type,
                        }}
                        deleteItem={deleteItem}
                        updateFavorite={updateFavorite}
                      />
                    </Col>
                  )
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ItemList;
