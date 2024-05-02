import CartForm from "@/components/cart/CartForm";

export async function generateMetadata({ params, searchParams }, parent) {
  return { title: `iTech - Cart` };
}

const Cart = () => {
  return (
    <>
      <CartForm />
    </>
  );
};
export default Cart;
