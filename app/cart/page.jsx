"use client";
import CartItem from "@/components/cart/CartItem";
import { useCartContext } from "@/components/context/CartContext";
import { useState } from "react";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cart,
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/cart", {
      method: "POST",
      body: JSON.stringify(values),
    });
    Swal.fire({
      position: "top-end",
      icon: "success",
      iconColor: "#457b9d",
      title: "Purchase done!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <main className="my-16 px-3 sm:px-20 lg:px-40 xl:px-52 2xl:px-96 select-none">
      <h1 className="font-semibold text-4xl border-b border-gray text-cyan">
        YOUR PURCHASE
      </h1>
      <div className="bg-white px-5 my-5 rounded-md">
        <ul className="grid grid-cols-2 gap-4">
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </ul>
        <h2 className="text-black font-semibold text-2xl pb-3 my-3 border-b border-borderGray">
          Total: $ {totalPrice()}
        </h2>
        <form className="grid gap-4 xl:w-1/2 my-6 pb-4" onSubmit={handleSubmit}>
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

          <div className="flex justify-center lg:justify-start">
            <button
              type="submit"
              className="bg-cyan w-full xl:w-1/2 py-3 px-6 sm:px-10 text-white shadow-md"
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
