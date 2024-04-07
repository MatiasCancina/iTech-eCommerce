"use client";
import { useState } from "react";
import Counter from "../ui/Counter";
import Link from "next/link";

const QtySelector = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    console.log({
      ...item,
      quantity,
    });
  };

  return (
    <div className="flex flex-col gap-3 mt-6">
      <Counter max={item.inStock} counter={quantity} setCounter={setQuantity} />
      <div className="flex flex-col "></div>
      <Link
        href={"/cart"}
        className="bg-gray-800 text-white rounded py-3 flex items-center justify-center"
        onClick={handleAdd}
      >
        Buy now
      </Link>
      <button
        className="bg-slate-300 text-gray-800 font-medium rounded py-3"
        onClick={handleAdd}
      >
        Add to cart
      </button>
    </div>
  );
};

export default QtySelector;
