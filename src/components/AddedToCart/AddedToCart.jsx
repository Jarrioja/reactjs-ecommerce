import React from "react";
import { Link } from "react-router-dom";

const AddedToCart = () => {
  return (
    <div className='d-grid mt-3'>
      <div className='alert alert-success text-center' role='alert'>
        Se ha añadido al carrito.
      </div>
      <div className='d-flex  flex-column align-center justify-center text-center gap-2'>
        <Link to='/cart' className='btn btn-primary'>
          Ir al carrito
        </Link>
        <Link to='/' className='btn btn-outline-primary'>
          Continuar comprando
        </Link>
      </div>
    </div>
  );
};

export default AddedToCart;
