import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="flex items-center justify-between bg-gray-800 py-6 px-40">
      <a className="text-white font-bold text-xl">eCommerce Coderhouse</a>
      <nav className="flex justify-between gap-2">
        <a href="#" className="text-base text-slate-100 p-3 ">
          1
        </a>
        <a href="#" className="text-base text-slate-100 p-3 ">
          2
        </a>
        <a href="#" className="text-base text-slate-100 p-3 ">
          3
        </a>
        <a href="#" className="text-base text-slate-100 p-3 ">
          4
        </a>
        <a href="#" className="text-base text-slate-100 p-3 ">
          CARRITO
        </a>
      </nav>
    </div>
  );
};
