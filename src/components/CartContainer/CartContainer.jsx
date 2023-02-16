import {
  addDoc,
  collection,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";

const CartContainer = () => {
  const navigate = useNavigate();
  const { cartList, emptyCart, totalPrice } = useCartContext();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    emailValidation: "",
  });
  const handlerOnChange = (e) => {
    e.target.name;
    e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const createOrder = async (e) => {
    e.preventDefault();
    const order = {};
    //Validar formData
    order.buyer = formData;
    order.items = cartList.map(({ id, name, price }) => ({ id, name, price }));
    order.total = totalPrice();
    console.log(order);
    const db = getFirestore();
    const orderCollections = collection(db, "orders");

    const addOrder = await addDoc(orderCollections, order).finally(() => {
      emptyCart();
      setFormData({
        name: "",
        phone: "",
        email: "",
        emailValidation: "",
      });
    });
    console.log(addOrder.id);
    navigate(`/thank-you/${addOrder.id}`);
  };

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
      <form onSubmit={createOrder}>
        <input
          type='text'
          name='name'
          placeholder='Ingresa tu Nombre'
          value={formData.name}
          onChange={handlerOnChange}
        />
        <br />
        <input
          type='text'
          name='phone'
          placeholder='Ingresa tu telefono'
          value={formData.phone}
          onChange={handlerOnChange}
        />
        <br />
        <input
          type='email'
          name='email'
          placeholder='Ingresa tu email'
          value={formData.email}
          onChange={handlerOnChange}
        />
        <br />
        <input
          type='email'
          name='emailValidation'
          placeholder='Repite tu email'
          value={formData.emailValidation}
          onChange={handlerOnChange}
        />
        <br />
        <button className='btn btn-primary'> Finalizar Compra</button>
      </form>
      <button className='btn btn-outline-danger' onClick={emptyCart}>
        Vaciar Carrito
      </button>
    </>
  );
};

export default CartContainer;
