"use client";
import useProductsFetch from "@/hooks/useProductsFetch";
import ProductCard from "./ProductCard";
import Loader from "../ui/Loader";

const ProductsList = ({ category }) => {
  const { items, loading } = useProductsFetch(category);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
        {items.length &&
          items.map((item) => (
            <div className="w-full" key={item.id}>
              <ProductCard key={item.id} item={item} />
            </div>
          ))}
      </section>
    </>
  );
};

export default ProductsList;
