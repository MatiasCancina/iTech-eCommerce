import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 py-6 px-16">
      <div className="text-white font-bold">eCommerce Coderhouse</div>
      <div className="flex space-x-10">
        <a href="#" className="text-white">
          1
        </a>
        <a href="#" className="text-white">
          2
        </a>
        <a href="#" className="text-white">
          3
        </a>
        <a href="#" className="text-white">
          4
        </a>
      </div>
    </nav>
  );
};
