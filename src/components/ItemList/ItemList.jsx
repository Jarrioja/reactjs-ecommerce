import { useEffect, useState } from "react";
import IsLoading from "../IsLoading/IsLoading";
import Item from "../Item/Item";
import { getAllProducts } from "../../utils/getProducts";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllProducts(setProducts).finally(() => setIsLoading(false));
  }, []);

  return (
    <div className='d-flex justify-content-center my-5'>
      {isLoading ? (
        <IsLoading />
      ) : (
        products.map((p) => {
          return <Item item={p} key={p.id} />;
        })
      )}
    </div>
  );
};

export default ItemList;
