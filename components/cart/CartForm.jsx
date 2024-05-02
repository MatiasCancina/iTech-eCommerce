"use client";
import CartItem from "@/components/cart/CartItem";
import { useCartContext } from "@/components/context/CartContext";
import ClientForm from "./ClientForm";

const CartForm = () => {
  const { cart, totalPrice } = useCartContext();

  return (
    <main className="my-16 px-3 sm:px-20 lg:px-40 xl:px-52 2xl:px-96 select-none">
      <h1 className="font-semibold text-4xl border-b border-gray text-cyan">
        YOUR PURCHASE
      </h1>
      <div className="bg-white px-5 my-5 rounded-md">
        <ul className="grid grid-cols-2 gap-4">
          {cart && cart.map((item) => <CartItem item={item} key={item.id} />)}
        </ul>
        <h2 className="text-black font-semibold text-2xl pb-3 my-3 border-b border-borderGray">
          Total: $ {totalPrice()}
        </h2>
        <ClientForm />
      </div>
    </main>
  );
};

export default CartForm;
