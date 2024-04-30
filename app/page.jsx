import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import Loader from "@/components/ui/Loader";
import { Suspense } from "react";
import ProductsList from "@/components/products/ProductsList";
import CategoriesMenu from "@/components/products/CategoriesMenu";
import Link from "next/link";

export default function Home() {
  return (
    <div className="py-10 md:px-32 lg:px-40 xl:px-52 2xl:px-96 flex items-center justify-center">
      <div className="bg-white rounded-xl p-5 w-11/12 lg:w-full">
        <div className="flex flex-col lg:flex-row justify-between">
          <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={<Loader />}>
            {/* <CategoriesMenu />
              <ProductsList category={"all"} /> */}
              <h1>Welcome</h1>
              <Link href={'/all'}>go buy</Link>
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}
