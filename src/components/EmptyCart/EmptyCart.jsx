import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <>
      <section className='container'>
        <div className='row justify-content-center mt-5'>
          <div className=' col-sm-12 col-md-6 p-2 text-center'>
            <h2> Carrito vacio</h2>
            <Link className='btn btn-primary' to='/'>
              Regresar a la tienda
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmptyCart;
