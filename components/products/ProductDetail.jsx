import { mockData } from "@/data/mockdata";
import Image from "next/image";
import QtySelector from "./QtySelector";

const ProductDetail = ({ id }) => {
  const item = mockData.find((p) => p.id === id);

  return (
    <div>
      <section className="flex gap-6">
        <div className="relative basis-1/2">
          <Image src={item.image} alt={item.title} width={800} height={800} />
        </div>
        <div className="basis-1/2">
          <h2 className="text-2xl font-semibold border-b border-gray-200 pb-4 mb-4">
            {item.title}
          </h2>
          <p>{item.price}</p>
          <QtySelector item={item} />
        </div>
      </section>
      <section className="mt-12">
        <h3 className="text-xl font-semibold border-b border-gray-200 pb-4 my-4">
          Description
        </h3>
        <p className="text-gray-600">{item.description}</p>
      </section>
    </div>
  );
};

export default ProductDetail;
