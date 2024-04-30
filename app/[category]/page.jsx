import Error from "@/app/error";
import CategoriesMenu from "@/components/products/CategoriesMenu";
import ProductsList from "@/components/products/ProductsList";
import { Suspense } from "react";
import Loader from "@/components/ui/Loader";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export async function generateMetadata({ params, searchParams }, parent) {
  const category = params.category.charAt(0).toUpperCase() + params.category.slice(1);
  return { title: `iTech - ${category}` };
}

// export function generateStaticParams() {
//   return [
//     { category: "all" },
//     { category: "mouses" },
//     { category: "monitors" },
//     { category: "keyboards" },
//   ];
// }

const Products = ({ params }) => {
  const { category } = params;

  try {
    if (
      category !== "all" &&
      category !== "mouses" &&
      category !== "monitors" &&
      category !== "keyboards"
    ) {
      throw Error("Page not found!");
    }

    return (
      <div className="py-10 md:px-32 lg:px-40 xl:px-52 2xl:px-96 flex items-center justify-center">
        <div className="bg-white rounded-xl p-5 w-11/12 lg:w-full">
          <div className="flex flex-col lg:flex-row justify-between">
            <ErrorBoundary fallback={<Error/>}>
              <Suspense fallback={<Loader />}>
                <CategoriesMenu />
                <ProductsList category={category} />
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <>
        <Error errorMessage={error.message} />;
      </>
    );
  }
};

export default Products;
