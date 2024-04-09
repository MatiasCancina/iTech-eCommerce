import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import CategoriesMenu from "./CategoriesMenu";
import ProductsList from "@/components/products/ProductsList";
import Error from "@/app/error";

const ProductsAll = () => {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col md:flex-row md:space-x-3 lg:space-x-16 justify-center">
        <ErrorBoundary fallback={<Error />}>
          <CategoriesMenu />
          <ProductsList category={"all"} />
        </ErrorBoundary>
      </div>
    </main>
  );
};

export default ProductsAll;
