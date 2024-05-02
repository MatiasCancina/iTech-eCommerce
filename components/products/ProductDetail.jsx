import Image from "next/image";
import QtySelector from "./QtySelector";

const ProductDetail = async ({ id }) => {
  const item = await fetch(
    `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/product/${id}`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());

  if (item.title === undefined) throw new Error('Product not found');

  return (
    <div className="py-16 md:px-32 lg:px-40 xl:px-52 2xl:px-96 flex items-center justify-center select-none">
      <div className="bg-white rounded-xl p-6 w-11/12 lg:w-full">
        <div className="flex flex-col lg:flex-row justify-center items-center xl:space-x-20">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={500}
              style={{ objectFit: "contain" }}
              priority
            />
          ) : (
            <>
              <p>no image </p>
            </>
          )}
          <div className="flex flex-col space-y-3">
            <div>
              <h2 className="text-3xl font-semibold border-b border-borderGray pb-4 mb-4">
                {item.title}
              </h2>
              <p className="text-4xl font-light text-black">${item.price}</p>
            </div>
            <p className="text-gray w-72">{item.description}</p>
            <QtySelector item={item} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
