import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ item }) => {
  return (
    <article className="shadow-lg rounded m-3 hover:translate-y-1 hover:shadow-2xl transition">
      <Link
        href={`/detail/${item.id}`}
        className="flex flex-col rounded py-3 border "
      >
        <div className="border-b border-gray-200 mb-2">
          <Image
            alt={item.title}
            src={`${item.image.src}`}
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="space-y-2 px-3">
          <h4>{item.title}</h4>
          <p className="text-2xl">${item.price}</p>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
