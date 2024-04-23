"use client";
import { useContext, createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const cartSaved = localStorage.getItem("cart");
      const initialValue = JSON.parse(cartSaved);
      return initialValue || [];
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      async function loadCartFromLocalStorage() {
        const storedCart = await localStorage.getItem("cart");
        if (storedCart) {
          setCart(JSON.parse(storedCart));
        }
      }
      loadCartFromLocalStorage();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
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
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
