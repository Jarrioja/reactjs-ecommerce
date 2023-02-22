import {
  addDoc,
  collection,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import validator from "validator";
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
    if (
      validator.equals(formData.email, formData.emailValidation) &&
      !validator.isEmpty(formData.emailValidation)
    ) {
      order.buyer = formData;
      order.items = cartList.map(({ id, name, price }) => ({
        id,
        name,
        price,
      }));
      order.total = totalPrice();

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
      navigate(`/thank-you/${addOrder.id}`);
    } else {
      alert("Email no coincide");
    }
  };

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
              <form onSubmit={createOrder}>
                <div className='from-group'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Ingresa tu nombre'
                    value={formData.name}
                    onChange={handlerOnChange}
                    className='form-control'
                  />
                </div>
                <div className='from-group pt-2'>
                  <input
                    type='text'
                    name='phone'
                    placeholder='Ingresa tu telefono'
                    value={formData.phone}
                    onChange={handlerOnChange}
                    className='form-control'
                  />
                </div>
                <div className='from-group pt-2'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Ingresa tu email'
                    value={formData.email}
                    onChange={handlerOnChange}
                    className='form-control'
                  />
                </div>
                <div className='from-group pt-2'>
                  <input
                    type='email'
                    name='emailValidation'
                    placeholder='Valida tu email'
                    value={formData.emailValidation}
                    onChange={handlerOnChange}
                    className='form-control'
                  />
                </div>

                <button className={`btn btn-primary mt-2  w-100 btn-lg}`}>
                  Finalizar Compra
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartContainer;
