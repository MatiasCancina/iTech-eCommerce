'use client'
import { useState, useEffect } from "react";

const useProductsFetch = (category) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/api/products/${category}`, {
          cache: "force-cache",
          next: {
            revalidate: 30,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        throw new Error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return { items, loading };
};

export default useProductsFetch;
