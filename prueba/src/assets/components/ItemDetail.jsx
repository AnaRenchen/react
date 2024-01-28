import ItemCount from "./ItemCount";

const ItemDetail = ({ name, img, category, description, price, stock }) => {
  return (
    <div className="detail_container">
      <div className="card_detail">
        <h6 className="card_title_container">{name}</h6>
        <img src={img} className="image_detail" alt={name} />
      </div>
      <div className="card_body_detail">
        <p> Category: {category}</p>
        <p className="descripcion_detail"> Description: {description}</p>
        <p> Price: ${price} </p>
        <ItemCount initial={1} stock={stock} />
      </div>
    </div>
  );
};

export default ItemDetail;
