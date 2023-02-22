import ItemCount from "../ItemCount/ItemCount";
import AddedToCart from "../AddedToCart/AddedToCart";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";

import "./ItemDetail.scss";
import { Link } from "react-router-dom";

function ItemDetail({ product }) {
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCartContext();
  const onAdd = (qty) => {
    setAddedToCart(true);
    addToCart({ ...product, qty: qty });
  };

  const {
    name,
    author,
    description,
    stock,
    categoryName,
    image,
    price,
    catId,
  } = product;

  return (
    <>
      <div className='row align-items-start mx-3'>
        <div className='col-sm-12 col-md-8'>
          <img className='img-fluid rounded' src={image} alt='' />
          <div className='mt-3 col-12 card'>
            <div className='card-header'>Detalles del curso</div>
            <div className='card-body'>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-4 card shadow-sm sticky-md-top product-data'>
          <div className='card-body'>
            <h1>{name}</h1>
            <Link to={`/category/${catId}`}>{categoryName}</Link>
            <div className='author'>
              <span className='author__name'>{author}</span>
            </div>
            <h2 className='price'>{`$ ${price}`}</h2>
            {addedToCart ? (
              <AddedToCart />
            ) : (
              <ItemCount initial={1} stock={stock} onAdd={onAdd} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
