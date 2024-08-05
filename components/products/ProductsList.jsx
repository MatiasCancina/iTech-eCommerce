import ProductCard from "./ProductCard";

const ProductsList = async ({ category }) => {
  try {
    const items = await fetch(
      `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products/${category}`,
      {
        cache: "force-cache",
        next: {
          tags: ["products"],
        },
      }
    ).then((r) => r.json());

    if (!items || !items.length || items === "undefined") {
      return <p>No products yet</p>;
    }

    return (
      <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full select-none">
        {items.map((item) => (
          <div className="w-full" key={item.id}>
            <ProductCard key={item.id} item={item} />
          </div>
        ))}
      </section>
    );
  } catch (error) {
    console.log(error);
  }
};

export default ProductsList;