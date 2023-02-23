import React from "react";

const CheckoutForm = ({ formData, handlerOnChange, createOrder }) => {
  console.log(formData);
  return (
    <form onSubmit={(e) => createOrder(e)}>
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
  );
};

export default CheckoutForm;
