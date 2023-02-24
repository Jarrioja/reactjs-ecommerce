import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { findProductById } from "../../utils/getFiresotreProducts";

import ItemDetail from "../ItemDetail/ItemDetail";
import IsLoading from "../IsLoading/IsLoading";

function ItemDetailContainer() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    findProductById(productId, setProduct).then(() => {
      // The request is so fast that it doesn't load the loader
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    });
  }, []);

  return (
    <article className='container my-5'>
      {isLoading ? <IsLoading /> : <ItemDetail product={product} />}
    </article>
  );
}

export default ItemDetailContainer;
