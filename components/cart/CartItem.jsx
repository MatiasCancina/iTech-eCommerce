"use client";
import Image from "next/image";
import { FiTrash2 } from "react-icons/fi";
import { useCartContext } from "../context/CartContext";
const CartItem = ({ item }) => {
  const { removeFromCart } = useCartContext();

  return (
    <div className="flex justify-between items-center bg-white border border-borderGray shadow-lg my-5 p-4 max-w-xl gap-6 rounded-md">
      <Image
        src={item.image}
        width={100}
        height={100}
        alt={item.title}
        className="flex justify-start items-start"
      />
      <div className="flex flex-col">
        <div className="text-black">{item.title}</div>
        <div className="text-black font-semibold">${item.price}</div>
        <div className="text-black">Quantity: {item.quantity}</div>
      </div>
      <button
        className="bg-red px-4 py-2 rounded-lg"
      >
        <FiTrash2 className="text-2xl font-thin text-white" 
        />
      </button>
    </div>
  );
};

export default CartItem;
