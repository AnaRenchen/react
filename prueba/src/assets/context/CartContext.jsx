import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addItem = (item, cantidad) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, cantidad }]);
    } else {
      console.error("The product has already been added to Cart");
    }
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.map((prod) => {
      if (prod.id === itemId) {
        return { ...prod, cantidad: prod.cantidad - 1 };
      }
      return prod;
    });

    setCart(updatedCart.filter((prod) => prod.cantidad > 0));
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const calcularTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.cantidad, 0);
  };

  const calcularSubtotal = (itemId) => {
    const item = cart.find((prod) => prod.id === itemId);
    return item ? item.price * item.cantidad : 0;
  };

  const totalQuantity = () => {
    return cart.reduce((total, item) => total + item.cantidad, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        calcularTotal,
        calcularSubtotal,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
