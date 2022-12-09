import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Item({Item})
{
    return(
        <div>
            <img src={Item.ImageURL} alt={Item.Title} width="150"/><br/>
            <Button variant={Item.Favorite? "warning":"secondary"} size="sm">Favorite</Button>
            <Button variant="danger" size="sm">Delete</Button>
            <h2>{Item.Title}</h2>
            <h3>{Item.Type}</h3>
            <h3>{Item.Rating}</h3>
            <p>{Item.Description}</p>
        </div>
    )

}

export default Item;