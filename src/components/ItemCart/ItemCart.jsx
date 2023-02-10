import React from "react";
import { useCartContext } from "../../context/CartContext";

const ItemCart = ({ p }) => {
  const { removeProductById } = useCartContext();
  return (
    <div className='list-group-item flex-column align-items-start' key={p.id}>
      <div className='d-flex w-100 justify-content-between'>
        <h5 className='mb-1'>{p.name}</h5>
        <div className='d-flex flex-column'>
          <span>{`$${p.qty * p.price}`}</span>
          <button
            value={p.id}
            onClick={(e) => removeProductById(e.target.value)}
          >
            Remove
          </button>
        </div>
      </div>
      <small>Subtotal: {`${p.qty} x ${p.price}`}</small>
    </div>
  );
};

export default ItemCart;
