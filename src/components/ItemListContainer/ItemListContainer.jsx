import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  findProductsByCategory,
  getAllProducts,
} from "../../utils/getProducts";
import IsLoading from "../IsLoading/IsLoading";
import ItemList from "../ItemList/ItemList";
const ItemListContainer = ({ greeting }) => {
  const { categoria } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    if (categoria) {
      setCategoryName(categoria);
      findProductsByCategory(categoria, setProducts).finally(() => {
        setIsLoading(false);
      });
    } else {
      setCategoryName("");
      getAllProducts(setProducts).finally(() => setIsLoading(false));
    }
  }, [categoria]);

  return (
    <section className='container-fluid'>
      <div className='container py-5'>
        <h1 className='text-center'>{greeting}</h1>
        <h1 className='text-center'>{categoryName}</h1>
        {isLoading ? <IsLoading /> : <ItemList products={products} />}
      </div>
    </section>
  );
};

export default ItemListContainer;
