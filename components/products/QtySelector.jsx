"use client";
import React from "react";
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
    <div className="flex flex-col gap-5 mt-6">
      <Counter max={item.inStock} counter={quantity} setCounter={setQuantity} />
      <button className="bg-red-500" onClick={handleAdd}>
        Add to cart
      </button>
    </div>
  );
};

export default QtySelector;
