import Error from "@/app/error";
import CategoriesMenu from "@/components/products/CategoriesMenu";
import ProductsList from "@/components/products/ProductsList";
import { Suspense } from "react";
import Loader from "@/components/ui/Loader";

const Products = ({ params }) => {
  const { category } = params;

  try {
    if (
      category !== "all" &&
      category !== "mouses" &&
      category !== "monitors" &&
      category !== "keyboards"
    ) {
      throw Error("salto el error pa");
    }

    return (
      <div className="py-10 md:px-32 lg:px-40 xl:px-52 2xl:px-96 flex items-center justify-center">
        <div className="bg-white rounded-xl p-5 w-11/12 lg:w-full">
          <div className="flex flex-col lg:flex-row justify-between">
            <CategoriesMenu />
            <Suspense fallback={<Loader />}>
              <ProductsList category={category} />
            </Suspense>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return <Error errorMessage={error.message} />;
  }
};

export default Products;
