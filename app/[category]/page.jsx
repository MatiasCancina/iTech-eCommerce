import CategoriesMenu from "@/components/products/CategoriesMenu";
import ProductsList from "@/components/products/ProductsList";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `iTech - ${params.category}`,
  };
}

const Products = ({ params }) => {
  const { category } = params;

  return (
    <main className="flex justify-center">
      <div className="flex space-x-6">
        <CategoriesMenu />
        <ProductsList category={category} />
      </div>
    </main>
  );
};

export default Products;
