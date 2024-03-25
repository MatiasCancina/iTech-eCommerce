"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "All",
    href: "/products/all",
  },
  {
    label: "Mouses",
    href: "/products/mouses",
  },
  {
    label: "Monitors",
    href: "/products/monitors",
  },
  {
    label: "Keyboards",
    href: "/products/keyboards",
  },
];

const CategoriesMenu = () => {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col gap-3">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={`${
            pathname === link.href ? "font-semibold border-b" : ""
          } py-2`}
        >
          {link.label}
        </Link>
      ))}
    </aside>
  );
};

export default CategoriesMenu;
