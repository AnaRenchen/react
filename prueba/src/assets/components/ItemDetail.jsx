import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [showItemCount, setShowItemCount] = useState(true);

  const { addItem } = useContext(CartContext);

  const handleAddToCart = (cantidad) => {
    setShowItemCount(false);

    const item = {
      id,
      name,
      price,
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
        {showItemCount ? (
          <ItemCount initial={1} stock={stock} onAdd={handleAddToCart} />
        ) : (
          <div className="counter">
            <Link to="/cart" className="btn btn_shop">
              Cart
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
