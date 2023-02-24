import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  getAllProducts,
  findProductsByCategory,
  getCategoryName,
} from "../../utils/getFiresotreProducts";

import IsLoading from "../IsLoading/IsLoading";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (category) {
      getCategoryName(category, setCategoryName);
      findProductsByCategory(category, setProducts).finally(() => {
        setIsLoading(false);
      });
    } else {
      setCategoryName("");
      getAllProducts(setProducts).finally(() => setIsLoading(false));
    }
  }, [category]);

  return (
    <section className='container-fluid'>
      <div className='container py-5'>
        <h1 className='text-center'>{greeting}</h1>
        <h2 className='text-center'>{categoryName}</h2>
        {isLoading ? <IsLoading /> : <ItemList products={products} />}
      </div>
    </section>
  );
};

export default ItemListContainer;
