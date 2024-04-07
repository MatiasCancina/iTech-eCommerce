import Image from "next/image";
import QtySelector from "./QtySelector";

const ProductDetail = async ({ id }) => {
  try {
    const item = await fetch(`http://localhost:3000/api/product/${id}`, {
      cache: "no-store",
      next: {
        revalidate: 0,
      },
    }).then((res) => res.json());

    return (
      <div className="py-16 md:px-32 lg:px-40 xl:px-52 2xl:px-96 flex items-center justify-center select-none">
        <div className="bg-white rounded-xl p-6 w-11/12 lg:w-full">
          <div className="flex flex-col items-center">
            <div className="flex flex-col lg:flex-row">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                priority
              />
              <div className="flex flex-col space-y-3">
                <div>
                  <h2 className="text-3xl font-semibold border-b border-gray-200 pb-4 mb-4">
                    {item.title}
                  </h2>
                  <p className="text-4xl font-light">${item.price}</p>
                </div>
                <p className="text-gray-600 w-72">{item.description}</p>
                <QtySelector item={item} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return <div>Error fetching data</div>;
  }
};

export default ProductDetail;
