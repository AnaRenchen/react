import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import Cat from "../imagenes/cat.png";

const Cart = () => {
  const { cart, clearCart, totalQuantity, calcularTotal } =
    useContext(CartContext);

  if (totalQuantity() === 0) {
    return (
      <div className="container_cart_vacio">
        <img src={Cat} alt="" />
        <h1 className="cart_vacio"> Your cart is empty... </h1>
        <Link to="/" className="btn btn_paintings">
          See All Paintings
        </Link>
      </div>
    );
  }

  return (
    <div className="cart_container">
      <div className="row">
        <div className="col text-center">
          <h1 className="checkout_title" style={{ marginTop: 30 }}>
            Purchase Summary
          </h1>
        </div>
      </div>
      {cart.map((product) => (
        <CartItem key={product.id} {...product} />
      ))}
      <div className="clear_container">
        <button className="btn btn_clear" onClick={() => clearCart()}>
          Clear Cart
        </button>
      </div>
      <div className="cart_btn_container">
        <p className="total"> Total =${calcularTotal()}</p>

        <Link to="/checkout" className="btn btn_checkout">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
