import { mockData } from "@/data/mockdata";
import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ category }) => {
  const items =
    category === "all"
      ? mockData
      : mockData.filter((item) => item.type === category);

  return (
    <section className="grid grid-cols-4 w-10/12">
      {items.map((item) => (
        <div className="w-full " key={item.id}>
          <ProductCard key={item.id} item={item} />
        </div>
      ))}
    </section>
  );
};

export default ProductsList;
