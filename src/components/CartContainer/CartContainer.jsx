import React from "react";

import { useCartContext } from "../../context/CartContext";

import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CartList from "../CartList/CartList";
import EmptyCart from "../EmptyCart/EmptyCart";

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
    return <EmptyCart />;
  }
  return (
    <>
      <section className='container'>
        <div className='row justify-content-center mt-5 '>
          <CartList cartList={cartList} emptyCart={emptyCart} />
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
