import Cart from "../imagenes/cart.png";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="contenedor_cart">
      <div className="contenedor_carrito">
        <Link
          to="/cart"
          className="btn  position-relative btnCart"
          style={{ display: totalQuantity() > 0 ? "block" : "none" }}
        >
          <img className="carrito" src={Cart} alt="Carrito" width={25} />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {totalQuantity()}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CartWidget;
