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

  var selectedUser;

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
  const submitNewItem = (data) => {};
  const changeUser = (data) => {
    var user = data.target.value;
    selectedUser = user[0];
  };

  useEffect(() => {
    GetUsers();
  }, []);

  const GetUsers = () => {
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

  const addUser = (user) => {
    axios
      .post("http://localhost:8080/api/users", user)
      .then((response) => {
        console.log(response);
        GetUsers();
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
                  <select name="user" onChange={changeUser}>
                    <option>Select</option>
                    {Users.map((user) => (

                      <option key={user.id}>{user.id + " " + user.userName}</option>
                    ))}
                  </select>
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
                      <option value="movie">Movie</option>
                      <option value="tvshow">Tv-Show</option>
                      <option value="music">Music</option>
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
                  i.Favorite && (
                    <Col lg={3} sm={6}>
                      <Item
                        key={i.Id}
                        Item={{
                          Title: i.Title,
                          Type: i.Type,
                          ImageURL: i.ImageURL,
                          Description: i.Description,
                          Rating: i.Rating,
                          Favorite: i.Favorite,
                        }}
                      />
                    </Col>
                  )
              )}
            </Row>
            <Row>
              {items.map(
                (i) =>
                  !i.Favorite && (
                    <Col lg={3} sm={6}>
                      <Item
                        className="item"
                        key={i.Id}
                        Item={{
                          Title: i.Title,
                          Type: i.Type,
                          ImageURL: i.ImageURL,
                          Description: i.Description,
                          Rating: i.Rating,
                          Favorite: i.Favorite,
                        }}
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
