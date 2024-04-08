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
    <aside className="flex justify-center items-center md:flex-col md:justify-start md:items-start gap-3">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={`${
            pathname === link.href ? "font-semibold border-b border-borderGray" : ""
          } sm:py-2 text-lg w-full text-center lg:text-start`}
        >
          {link.label}
        </Link>
      ))}
    </aside>
  );
};

export default CategoriesMenu;
