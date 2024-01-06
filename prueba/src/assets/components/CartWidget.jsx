import Cart from "../imagenes/cart.png";

const CartWidget = () => {
  return (
    <div className="contenedor_cart">
      <div className="contenedor_carrito">
        <button type="button" className="btn  position-relative btnCart">
          <img className="carrito" src={Cart} alt="Carrito" width={25} />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            1
          </span>
        </button>
      </div>
    </div>
  );
};

export default CartWidget;
