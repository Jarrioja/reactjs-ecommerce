import React from "react";
import { Link } from "react-router-dom";

import ItemCart from "../ItemCart/ItemCart";

const CartList = ({ cartList, emptyCart }) => {
  return (
    <div className='col-sm-12 col-md-8 '>
      <div className='list-group shadow'>
        {cartList.map((p) => (
          <ItemCart key={p.id} p={p} />
        ))}
      </div>
      <div className='d-flex align-items-center mt-2 gap-2 mb-4'>
        <Link to='/' className='btn btn-secondary'>
          Continuar comprando
        </Link>
        <button className='btn btn-outline-danger ' onClick={emptyCart}>
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
};

export default CartList;
