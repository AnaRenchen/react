import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);
  const [itemStock, setItemStock] = useState(stock);
  const [goCart, setGoCart] = useState(false);

  const increment = () => {
    if (cantidad < itemStock) {
      setCantidad(cantidad + 1);
    }
  };
  const decrement = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const onAddClick = () => {
    if (cantidad <= itemStock) {
      setItemStock(itemStock - cantidad);
      setCantidad(initial);
      onAdd(cantidad);
      setGoCart(true);
    } else {
      setCantidad(initial);
    }
  };

  useEffect(() => {
    setItemStock(stock);
  }, [stock]);

  return (
    <div className="counter">
      <div className="controls">
        <button
          type="button"
          className="btn btn-sm btn_cantidad"
          onClick={decrement}
        >
          -
        </button>
        <p className="cantidad_producto">{cantidad}</p>

        <button
          type="button"
          className="btn btn-sm btn_cantidad"
          onClick={increment}
        >
          +
        </button>
      </div>
      {goCart ? (
        <div>
          <Link to="/cart" className="btn btn_goCart">
            Go to Cart
          </Link>
        </div>
      ) : (
        <button className="btn btn_shop" disabled={!stock} onClick={onAddClick}>
          Shop
        </button>
      )}
    </div>
  );
};

export default ItemCount;
