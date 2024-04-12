import ProductDetail from "@/components/products/ProductDetail";

const Detail = ({ params }) => {
  const { id } = params;
  
  return <ProductDetail id={id} />;
};

export default Detail;
