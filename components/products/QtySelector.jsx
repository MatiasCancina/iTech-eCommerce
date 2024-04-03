"use client";
import { useState } from "react";
import Counter from "../ui/Counter";

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
      <button
        className="bg-gray-800 text-white rounded py-3"
        onClick={handleAdd}
      >
        Buy now
      </button>
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
