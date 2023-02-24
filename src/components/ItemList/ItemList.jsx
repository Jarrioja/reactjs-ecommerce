import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className='d-flex justify-content-center my-5 gap-3 flex-column flex-md-row'>
      {products.map((p) => (
        <Item item={p} key={p.id} />
      ))}
    </div>
  );
};

export default ItemList;
