import React from "react";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";

import completeAnimation from "../../assets/successCheck.json";

const ThankYou = () => {
  const { orderId } = useParams();
  return (
    <section className='container-fluid'>
      <div className='container py-5'>
        <Lottie
          className='w-25 mx-auto lottie-animation'
          animationData={completeAnimation}
          loop='false'
        />
        <h1 className='text-center'>Tu Compra a sido finalizada</h1>
        <h5 className='text-center'>ID de tu pedido: {orderId}</h5>
      </div>
    </section>
  );
};

export default ThankYou;
