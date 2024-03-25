import Products from "./products/[category]/page";

export default function Home() {
  return (
    <div className="py-10 md:px-32 lg:px-40 xl:px-52 2xl:px-96 flex items-center justify-center">
      <div className="bg-white rounded-xl p-5 w-11/12 lg:w-full">
        <Products />
      </div>
    </div>
  );
}
