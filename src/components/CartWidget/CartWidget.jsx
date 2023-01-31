import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.scss";

const CartWidget = () => {
  return (
    <div id='cart-trigger' href='#' className='cart'>
      <span className='cart__not-empty cart__qty'>20</span>
      <FontAwesomeIcon icon={faCartShopping} />
    </div>
  );
};

export default CartWidget;
