import { Button, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

function Item({item, deleteItem, updateFavorite }) {
  return (
    <div className="square border border-dark border-3 rounded p-2 text-center m-3">
      <img src={item.ImageURL} alt={item.Title} width="150" />
      <br />
      <Button
        className="me-2 mt-3"
        variant={item.Favorite ? "warning" : "secondary"}
        size="sm"
        onClick={()=>updateFavorite(item.Id)}
      >
        Fav
      </Button>
      <Button onClick={()=>deleteItem(item.Id)} className="ms-5 mt-3" variant="danger" size="sm">
        Delete
      </Button>
      <h2>{item.Title}</h2>
      <h4>{item.Type.type}</h4>
      <Rating
        className="m-auto"
        style={{ maxWidth: 150 }}
        value={item.Rating}
      />
      <p>{item.Description}</p>
    </div>
  );
}

export default Item;
