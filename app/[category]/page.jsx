import Error from "@/app/error";
import CategoriesMenu from "@/components/products/CategoriesMenu";
import ProductsList from "@/components/products/ProductsList";

const Products = ({ params }) => {
  const { category } = params;

  try {
    if (
      category !== "all" &&
      category !== "mouses" &&
      category !== "monitors" &&
      category !== "keyboards"
    ) {
      throw Error('salto el error pa');
    }

    return (
      <div className="py-10 md:px-32 lg:px-40 xl:px-52 2xl:px-96 flex items-center justify-center">
        <div className="bg-white rounded-xl p-5 w-11/12 lg:w-full">
          <div className="flex flex-col md:flex-row md:space-x-3 lg:space-x-16 justify-center">
            <CategoriesMenu />
            <ProductsList category={category} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return <Error errorMessage={error.message}  />;
  }
};

export default Products;
