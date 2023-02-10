import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";

const CartContainer = () => {
  const { cartList, emptyCart, totalPrice } = useCartContext();
  if (cartList.length === 0) {
    return (
      <>
        <h2> No veo nada</h2>
        <Link to='/'>Regresar a la tienda</Link>
      </>
    );
  }
  return (
    <>
      <div className='list-group'>
        {cartList.map((p) => (
          <ItemCart key={p.id} p={p} />
        ))}
      </div>
      <h3>{totalPrice()}</h3>
      <button className='btn btn-outline-danger' onClick={emptyCart}>
        Vaciar Carrito
      </button>
      <button className='btn btn-primary'> Finalizar Compra</button>
    </>
  );
};

export default CartContainer;
