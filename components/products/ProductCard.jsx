import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ item }) => {
  return (
    <article className="shadow-lg rounded m-3">
      <Link
        href={`/detail/${item.id}`}
        className="flex flex-col bg-slate-400 rounded p-3"
      >
        <Image
          alt={item.title}
          src={`${item.image.src}`}
          width={200}
          height={200}
          style={{ objectFit: "contain" }}
        />

        <div>
          <h4>{item.title}</h4>
          <p>{item.price}</p>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
