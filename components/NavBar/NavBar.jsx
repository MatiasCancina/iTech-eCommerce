import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="flex items-center justify-between bg-gray-800 py-6 px-40">
      <span className="text-white font-bold text-xl">eCommerce Coderhouse</span>
      <nav className="flex justify-between gap-2">
        <Link href="#" className="text-base text-slate-100 p-3 ">
          TIENDA
        </Link>
        <Link href="#" className="text-base text-slate-100 p-3 ">
          NOSOTROS
        </Link>
        <Link href="#" className="text-base text-slate-100 p-3 ">
          3
        </Link>
        <Link href="#" className="text-base text-slate-100 p-3 ">
          4
        </Link>
        <Link href="#" className="text-base text-slate-100 p-3 ">
          CARRITO
        </Link>
      </nav>
    </div>
  );
};
