import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const increment = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };
  const decrement = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };
  return (
    <div className="counter">
      <div className="controls">
        <button className="btn btn-sm btn_cantidad" onClick={decrement}>
          -
        </button>
        <p className="cantidad_producto">{cantidad}</p>
        <button className="btn btn-sm btn_cantidad" onClick={increment}>
          +
        </button>
      </div>
      <button
        className="btn btn_shop"
        onClick={() => onAdd(cantidad)}
        disabled={!stock}
      >
        Shop
      </button>
    </div>
  );
};

export default ItemCount;
