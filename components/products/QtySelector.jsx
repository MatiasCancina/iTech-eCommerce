'use client'
import { useEffect, useState } from "react";
import Counter from "../ui/Counter";
import Link from "next/link";
import { useCartContext } from "../context/CartContext";

const QtySelector = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const [inCart, setInCart] = useState(false);
  const { addToCart, cart } = useCartContext();

  useEffect(() => {
    const itemInCart = cart.find(cartItem => cartItem.id === item.id);
    if (itemInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cart, item.id]);

  const handleAdd = () => {
    addToCart({ ...item, quantity });
  };

  return (
    <div className="flex flex-col gap-3 mt-6">
      {inCart ? (
        <Link href={"/cart"} className="bg-cyan text-white rounded py-3 flex items-center justify-center">
          Finish my purchase
        </Link>
      ) : (
        <>
        <Counter max={item.inStock} counter={quantity} setCounter={setQuantity} />
          <button className="bg-white text-cyan border border-cyan font-medium rounded py-3" onClick={handleAdd}>
            Add to cart
          </button>
          <Link href={"/cart"} onClick={handleAdd} className="bg-cyan text-white rounded py-3 flex items-center justify-center">
            Buy now
          </Link>
        </>
      )}
    </div>
  );
};

export default QtySelector;
