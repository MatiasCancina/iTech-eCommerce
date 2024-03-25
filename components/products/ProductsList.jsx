import { mockData } from "@/data/mockdata";
import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ category }) => {
  const items =
    category === "all"
      ? mockData
      : mockData.filter((item) => item.type === category);

  console.log(category);

  return (
    <section>
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </section>
  );
};

export default ProductsList;
