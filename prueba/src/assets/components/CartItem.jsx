import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = (product) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="cart_item_container">
      <h3 className="producto_cart_name"> {product.name}</h3>
      <p className="subtotal"> Items: {product.cantidad}</p>
      <p className="subtotal"> Price: ${product.price}</p>
      <p className="subtotal">Subtotal: ${product.cantidad * product.price} </p>
      <button className="trash" onClick={() => removeItem(product.id)}>
        <img
          src="https://i.postimg.cc/pXC9FVj4/trash.png"
          alt="eliminar_producto"
        />
      </button>
    </div>
  );
};

export default CartItem;
