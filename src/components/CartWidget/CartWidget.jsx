import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { useCartContext } from "../../context/CartContext";

import "./CartWidget.scss";

const CartWidget = () => {
  const { totalQty } = useCartContext();

  return (
    <Link id='cart-trigger' to='/cart' className='cart'>
      <span className='cart__not-empty cart__qty'>{totalQty() || ""}</span>
      <FontAwesomeIcon icon={faCartShopping} />
    </Link>
  );
};

export default CartWidget;
