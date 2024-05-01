"use client";
import { useContext, createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartSaved = localStorage.getItem("cart");
    if (cartSaved) {
      setCart(JSON.parse(cartSaved));
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart]);
  
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id == id);
  };

  const totalQty = () => {
    if (!cart) return 0;
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const totalPrice = () => {
    if (!cart) return 0;
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        isInCart,
        totalQty,
        totalPrice,
        emptyCart,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
