import React from "react";
import { useState } from "react";

const ItemCount = (itemData) => {
  const { initial, stock, onAdd } = itemData;
  const [qty, setQty] = useState(initial);
  const addProduct = (num) => {
    if (stock >= qty) {
      setQty(qty + num);
    }
  };
  return (
    <div className='count-container'>
      <div className='count-container__contador'>
        <div className='input-group'>
          <input
            type='number'
            name='quantity'
            id='quantity'
            max={stock}
            className='form-control'
            placeholder="Recipient's username"
            aria-label='quantity'
            value={qty}
            readOnly
          />
          <button
            className='btn btn-outline-secondary'
            onClick={() => addProduct(+1)}
            disabled={qty === stock ? true : null}
            type='button'
          >
            +
          </button>
          <button
            className='btn btn-outline-secondary'
            onClick={() => addProduct(-1)}
            disabled={qty === 1 ? true : null}
            type='button'
          >
            -
          </button>
        </div>
        <span>{`${stock} Cupos disponibles`}</span>
      </div>
      <div className='d-grid mt-3'>
        <button
          className='btn btn-primary'
          onClick={() => onAdd(qty)}
          disabled={stock === 0 ? true : null}
        >
          Añadir
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
