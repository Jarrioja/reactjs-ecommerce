import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { findProductById } from "../../utils/getProducts";
import { useState, useEffect } from "react";
import IsLoading from "../IsLoading/IsLoading";

function ItemDetailContainer(id) {
  const { productId } = useParams();
  //console.log(productId);
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    findProductById(productId, setProduct).finally(() => {
      setIsLoading(false);
    });

    //console.log({ product });
  }, [id]);
  return (
    <article className='container my-5'>
      {isLoading ? <IsLoading /> : <ItemDetail product={product} />}
    </article>
  );
}

export default ItemDetailContainer;
