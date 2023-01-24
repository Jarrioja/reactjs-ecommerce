import { useEffect, useState } from "react";
import { gFecth } from "../../../utils/gFecth";
import IsLoading from "../../IsLoading/IsLoading";
import Item from "../Item/Item";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    gFecth()
      .then((result) => setProducts(result))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  console.log(products);
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
