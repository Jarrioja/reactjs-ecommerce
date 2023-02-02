import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ product }) {
  //onAdd
  //console.log(product);
  const { name, author, description, stock, category, image, price } = product;

  return (
    <>
      {/* <ItemCount onAdd={onAdd} initial={1} stock={0} /> */}
      <div className='row'>
        <div className='col-sm-12 col-md-8'>
          <img src={image} alt='' />
          <div className='mt-3 col-12 card'>
            <div className='card-header'>¿Que aprenderas?</div>
            <div className='card-body'>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-4 card shadow-sm'>
          <h1>{name}</h1>
          <span>{category}</span>
          <div className='author'>
            <span className='author__name'>{author}</span>
          </div>
          <h2 className='price'>{`$ ${price}`}</h2>
          <p>{description}</p>
          <span>{`${stock} Cupos disponibles`}</span>

          <ItemCount />
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
