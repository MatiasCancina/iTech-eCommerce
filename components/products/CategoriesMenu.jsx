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
    <aside className="flex flex-col gap-3">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={`${
            pathname === link.href ? "font-semibold border-b" : ""
          } py-2 text-lg`}
        >
          {link.label}
        </Link>
      ))}
    </aside>
  );
};

export default CategoriesMenu;
