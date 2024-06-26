import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ item }) => {
  return (
    <article className="shadow-lg rounded m-3 hover:translate-y-1 hover:shadow-2xl transition">
      <Link
        href={`/detail/${item.id}`}
        className="flex flex-col rounded border border-borderGray h-64 sm:h-72 2xl:h-80"
      >
        <div className="border-b border-b-borderGray px-4 mb-2 flex justify-center items-center h-28 sm:h-44 lg:h-40 xl:h-36 2xl:h-44">
          {item.image ? (
            <Image
              alt={item.title}
              src={item.image}
              width={200}
              height={200}
              style={{ objectFit: "contain" }}
              placeholder="blur"
              blurDataURL="data:..."
            />
          ) : (
            <>
              <p className="text-gray">no image </p>
            </>
          )}
        </div>

        <div className="space-y-2 p-3 ">
          <p className="text-lg text-black xl:text-xl 2xl:text-2xl font-medium">
            $ {item.price}
          </p>
          <h4 className="text-black flex items-start text-sm sm:text-base justify-start sm:h-10">
            {item.title}
          </h4>

          {item.inStock === 0 && (
            <p className="text-red font-medium flex items-start text-sm sm:text-base justify-start">
              No stock
            </p>
          )}
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
