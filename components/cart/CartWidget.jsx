"use client";
import { BsCart2 } from "react-icons/bs";
import Link from "next/link";
import { useCartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalQty } = useCartContext();

  return (
    <>
      <Link
        href="/cart"
        className="text-white p-3 hover:bg-navBtnHover rounded-full flex items-center justify-center space-x-1"
      >
        <BsCart2 className="text-2xl" />
        <div className="w-1">{totalQty()}</div>
      </Link>
    </>
  );
};

export default CartWidget;
