import ProductCard from "./ProductCard";

const ProductsList = async ({ category }) => {
  const items = await fetch(`http://localhost:3000//api/products/${category}`, {
    cache: "force-cache",
    next: {
      revalidate: 30,
    },
  }).then((r) => r.json());

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
