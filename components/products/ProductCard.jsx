import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ item }) => {
  return (
    <article className="basis-72 shadow-lg rounded">
      <Link href={`/detail/${item.id}`} className="flex flex-col">
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
