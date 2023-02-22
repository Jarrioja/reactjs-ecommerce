import "./Item.scss";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { id, name, description, stock, cat, image, author, price } = item;
  return (
    <div className='card col shadow-sm rounded' key={id}>
      <img src={image} alt='' className='card-img-top' />
      <div className='card-body d-grid'>
        <h5 className='card-title '>{name}</h5>
        <p className='card-text'> {`USD$ ${price}`}</p>
        <Link className='stretched-link btn btn-primary' to={`/product/${id}`}>
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
