import React from "react";
import { Link } from "react-router-dom";

import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const CartContainer = () => {
  const {
    formData,
    cartList,
    emptyCart,
    totalPrice,
    createOrder,
    handlerOnChange,
  } = useCartContext();

  if (cartList.length === 0) {
    return (
      <>
        <section className='container'>
          <div className='row justify-content-center mt-5'>
            <div className='col col-sm-12 col-md-6 p-2'>
              <h2> Carrito vacio</h2>
              <Link className='btn btn-primary' to='/'>
                Regresar a la tienda
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }
  return (
    <>
      <section className='container'>
        <div className='row justify-content-center mt-5 '>
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
          <div className='col-sm-12 col-md-4'>
            <div className='col-12 bg-white p-3 rounded shadow sticky'>
              <h3>Total: {totalPrice()}</h3>
              <CheckoutForm
                formData={formData}
                handlerOnChange={handlerOnChange}
                createOrder={createOrder}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartContainer;
