import Trash from "../imagenes/trash.png";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = (product) => {
  const { calcularSubtotal, removeItem } = useContext(CartContext);

  return (
    <div className="cart_item_container">
      <h3 className="producto_cart_name"> {product.name}</h3>
      <p className="subtotal"> Items: {product.cantidad}</p>
      <p className="subtotal"> Price: ${product.price}</p>
      <p className="subtotal">Subtotal: ${calcularSubtotal(product.id)} </p>
      <button className="trash" onClick={() => removeItem(product.id)}>
        <img src={Trash} alt="" />
      </button>
    </div>
  );
};

export default CartItem;
