import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className='container-fluid'>
      <div className='container py-5'>
        <h1 className='text-center'>{greeting}</h1>
      </div>
    </div>
  );
};

export default ItemListContainer;
