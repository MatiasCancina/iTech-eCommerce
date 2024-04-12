"use client";
import { useContext, createContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id == id);
  };

  const totalQty = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const totalPrice = () => {
    return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ addToCart, removeFromCart, isInCart, totalQty, totalPrice, emptyCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};
