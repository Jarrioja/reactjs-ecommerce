import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
const ItemListContainer = ({ greeting }) => {
  const { categoria } = useParams();
  console.log(categoria);
  return (
    <section className='container-fluid'>
      <div className='container py-5'>
        <h1 className='text-center'>{greeting}</h1>
        <h1 className='text-center'>{categoria}</h1>
        <ItemList />
      </div>
    </section>
  );
};

export default ItemListContainer;
