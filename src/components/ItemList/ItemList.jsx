import { useEffect, useState } from "react";

import Item from "../Item/Item";
import { getAllProducts } from "../../utils/getProducts";

const ItemList = ({ products }) => {
  return (
    <div className='d-flex justify-content-center my-5'>
      {products.map((p) => (
        <Item item={p} key={p.id} />
      ))}
    </div>
  );
};

export default ItemList;
