"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "All",
    href: "/",
  },
  {
    label: "Mouses",
    href: "/mouses",
  },
  {
    label: "Monitors",
    href: "/monitors",
  },
  {
    label: "Keyboards",
    href: "/keyboards",
  },
];

const CategoriesMenu = () => {
  const pathname = usePathname();

  return (
    <>
    <aside className="flex justify-start items-center lg:flex-col gap-3 lg:w-1/6">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={`${
            pathname === link.href ? "font-semibold border-b border-borderGray" : ""
          } sm:py-2 text-base sm:text-lg w-full text-center lg:text-start`}
        >
          {link.label}
        </Link>
      ))}
    </aside>
    </>
  );
};

export default CategoriesMenu;
