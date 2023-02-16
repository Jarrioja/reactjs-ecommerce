import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { findProductById } from "../../utils/getFiresotreProducts";
import { useState, useEffect } from "react";
import IsLoading from "../IsLoading/IsLoading";

function ItemDetailContainer() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    findProductById(productId, setProduct).finally(() => {
      setIsLoading(false);
    });
  });
  return (
    <article className='container my-5'>
      {isLoading ? <IsLoading /> : <ItemDetail product={product} />}
    </article>
  );
}

export default ItemDetailContainer;
