import ProductDetail from "@/components/products/ProductDetail";
import { mockData } from "@/data/mockdata";

const Detail = ({ params }) => {
  const { id } = params;

  const product = mockData.find((p) => {
    return p.id === parseInt(id, 10);
  });

  return <ProductDetail item={product} />;
};

export default Detail;
