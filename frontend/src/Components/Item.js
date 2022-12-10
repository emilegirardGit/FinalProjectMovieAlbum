import { Button, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

function Item({ Item }) {
  return (
    <div className="square border border-dark border-3 rounded p-2 text-center m-3">
      <img src={Item.ImageURL} alt={Item.Title} width="150" />
      <br />
      <Button
        className="me-2 mt-3"
        variant={Item.Favorite ? "warning" : "secondary"}
        size="sm"
      >
        Fav
      </Button>
      <Button className="ms-5 mt-3" variant="danger" size="sm">
        Delete
      </Button>
      <h2>{Item.Title}</h2>
      <h3>{Item.Type}</h3>
      <Rating
        className="m-auto"
        style={{ maxWidth: 150 }}
        value={Item.Rating}
      />
      <p>{Item.Description}</p>
    </div>
  );
}

export default Item;
