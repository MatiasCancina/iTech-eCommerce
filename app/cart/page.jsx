"use client";
import CartItem from "@/components/cart/CartItem";
import { useCartContext } from "@/components/context/CartContext";
import { useState } from "react";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    text: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <main className="my-16 px-3 sm:px-20 lg:px-40 xl:px-52 2xl:px-96 select-none">
      <h1 className="font-semibold text-4xl border-b border-gray text-cyan">
        YOUR PURCHASE
      </h1>
      <div className="bg-white px-5 my-3 rounded-md">
        <ul className="grid grid-cols-2 gap-4">
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </ul>
        <h2 className="text-black text-2xl pb-3 my-3 border-b border-borderGray">
          Total: {totalPrice()}{" "}
        </h2>
        <form className="grid gap-4 xl:w-3/4 my-6 pb-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              className="p-2 rounded-xl border border-lightBue h-10 text-lg text-black"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              className="p-2 rounded-xl border border-lightBue h-10 text-lg text-black"
            />
          </div>
          <input
            type="email"
            required
            placeholder="Email Adress"
            className="p-2 rounded-xl border border-lightBue h-10 text-lg text-black"
            name="email"
            onChange={handleChange}
          />

          <div className="flex justify-start">
            <button
              type="submit"
              className="bg-cyan py-3 px-6 sm:px-10 text-white shadow-md"
            >
              Finish my purchase
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Cart;
