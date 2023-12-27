import Cart from "../imagenes/cart.png";

const CartWidget = () => {
  return (
    <div className="contenedor_cart">
      <a href="#cart" id="carrito">
        <div className="contenedor_carrito">
          <div id="productos_carrito" className="contar_productos">
            0
          </div>
          <img className="carrito" src={Cart} alt="Carrito de compras" />
        </div>
      </a>
    </div>
  );
};

export default CartWidget;
