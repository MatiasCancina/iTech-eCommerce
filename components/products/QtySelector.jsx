"use client";
import { useState } from "react";
import Counter from "../ui/Counter";
import Link from "next/link";
import { useCartContext } from "../context/CartContext";

const QtySelector = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartContext();

  const handleAdd = () => {
    addToCart({ ...item, quantity });
  };

  return (
    <div className="flex flex-col gap-3 mt-6">
      <Counter max={item.inStock} counter={quantity} setCounter={setQuantity} />
      <Link
        href={"/cart"}
        className="bg-cyan text-white rounded py-3 flex items-center justify-center"
        onClick={handleAdd}
      >
        Buy now
      </Link>
      <button
        className="bg-white text-cyan border borer-cyan font-medium rounded py-3"
        onClick={handleAdd}
      >
        Add to cart
      </button>
    </div>
  );
};

export default QtySelector;
