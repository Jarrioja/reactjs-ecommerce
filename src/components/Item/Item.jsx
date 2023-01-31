import "./Item.scss";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { id, name, description, stock, cat, image, author } = item;
  return (
    <div className='card w-25 mx-2 shadow-sm rounded' key={id}>
      <div className='card-header'>
        <Link to={`/detail/${id}`}> {name || "Nada"}</Link>
      </div>
      <div className='card-body'>{description || "Nada"}</div>
    </div>
  );
};

export default Item;
