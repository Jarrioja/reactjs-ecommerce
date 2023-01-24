import ItemList from "./ItemList/ItemList";
const ItemListContainer = ({ greeting }) => {
  return (
    <section className='container-fluid'>
      <div className='container py-5'>
        <h1 className='text-center'>{greeting}</h1>
        <ItemList />
      </div>
    </section>
  );
};

export default ItemListContainer;
