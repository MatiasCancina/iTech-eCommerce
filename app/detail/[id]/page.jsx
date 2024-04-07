import ProductDetail from "@/components/products/ProductDetail";
import { mockData } from "@/data/mockdata";

const Detail = ({ params }) => {
  const { id } = params;
  
  return <ProductDetail id={id} />;
};

export default Detail;
