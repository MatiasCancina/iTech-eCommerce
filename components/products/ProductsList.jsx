"use client";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ category }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/products/${category}`,
          {
            cache: "force-cache",
            next: {
              revalidate: 60,
            },
          }
        );
        const data = await response.json();
        setItems(data);
      } catch (error) {
        setError("Error fetching data");
      }
    };

    fetchData();
  }, [category]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
      {items.map((item) => (
        <div className="w-full" key={item.id}>
          <ProductCard key={item.id} item={item} />
        </div>
      ))}
    </section>
  );
};

export default ProductsList;