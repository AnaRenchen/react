import Cart from "../imagenes/cart.png";

const CartWidget = () => {
  return (
    <div class="contenedor_cart">
      <a href="#cart" id="carrito">
        <div class="contenedor_carrito">
          <div id="productos_carrito" class="contar_productos">
            0
          </div>
          <img class="carrito" src={Cart} alt="Carrito de compras" />
        </div>
      </a>
    </div>
  );
};

export default CartWidget;
