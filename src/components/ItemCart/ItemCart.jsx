import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./ItemCart.scss";

const ItemCart = ({ p }) => {
  const { removeProductById } = useCartContext();
  return (
    <>
      <div
        className='list-group-item flex-column align-items-start py-2'
        key={p.id}
      >
        <div className='d-flex w-100 justify-content-between'>
          <h5 className='mb-1'>{p.name}</h5>
          <div className='d-flex flex-column'>
            <span>{`$${p.qty * p.price}`}</span>
          </div>
        </div>
        <div className='d-flex w-100 justify-content-between py-1'>
          <small>Subtotal: {`${p.qty} x ${p.price}`}</small>
          <button
            value={p.id}
            onClick={(e) => removeProductById(e.target.value)}
            className='btn btn-link btn-remove bg-red rounded-circle p-0 text-end'
          >
            <small>Eliminar</small>
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCart;
