import "./Item.scss";

const Item = ({ item }) => {
  const { id, name, description, stock, cat, image, author } = item;
  return (
    <div className='card w-25 mx-2 shadow-sm rounded' key={id}>
      <div className='card-header'>{name || "Nada"}</div>
      <div className='card-body'>{description || "Nada"}</div>
    </div>
  );
};

export default Item;
