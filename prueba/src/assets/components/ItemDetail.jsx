import ItemCount from "./ItemCount";
import { useContext } from "react";

import { CartContext } from "../context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = (cantidad) => {
    const item = {
      id,
      name,
      price,
      img,
    };

    addItem(item, cantidad);
  };

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

        <ItemCount initial={1} stock={stock} onAdd={handleAddToCart} />
      </div>
    </div>
  );
};

export default ItemDetail;
