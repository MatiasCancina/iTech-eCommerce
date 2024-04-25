"use client";

import Link from "next/link";
import { useState } from "react";
import { CiShoppingBasket } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import itech_logo from "@/public/itech_logo.png";
import { GrGroup } from "react-icons/gr";
import { IoMailOutline } from "react-icons/io5";
import { BsPostcard } from "react-icons/bs";
import CartWidget from "../cart/CartWidget";
import add_banner from "@/public/add_banner.png";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuItems = [
    {
      text: "Shop",
      path: "/",
      icon: <CiShoppingBasket />,
    },
    {
      text: "Us",
      path: "/us",
      icon: <GrGroup />,
    },
    {
      text: "Contact",
      path: "/contact",
      icon: <IoMailOutline />,
    },
    {
      text: "Posts",
      path: "/posts",
      icon: <BsPostcard />,
    },
  ];

  const isShopPage =
    pathname === "/" ||
    pathname === "/monitors" ||
    pathname === "/mouses" ||
    pathname === "/keyboards";

  return (
    <div className="bg-darkBlue flex justify-center items-center flex-col select-none">
      {/* Desktop Nav */}
      <nav className=" w-full lg:flex lg:justify-between lg:items-center lg:border-box lg:pt-6 py-6 md:px-32 lg:px-40 xl:px-52 2xl:px-96 hidden select-none">
        <div className="relative">
          <Link
            href={"/"}
            className="flex justify-center items-center text-white font-extrabold text-4xl w-1/2"
          >
            <Image src={itech_logo} width={62} height={62} alt="itech logo" />
            <p>iTech</p>
          </Link>
        </div>
        <div className="flex justify-end items-center">
          <Link
            href="/"
            className="text-base text-white p-3 hover:bg-navBtnHover rounded-full"
          >
            Shop
          </Link>
          <Link
            href="/us"
            className="text-base text-white p-3 hover:bg-navBtnHover rounded-full"
          >
            Us
          </Link>
          <Link
            href="/contact"
            className="text-base text-white p-3 hover:bg-navBtnHover rounded-full"
          >
            Contact
          </Link>
          <Link
            href="/posts"
            className="text-base text-white p-3 hover:bg-navBtnHover rounded-full"
          >
            Posts
          </Link>
          <CartWidget />
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className="w-screen lg:hidden">
        <div className="flex lg:hidden justify-between p-4">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FiX className=" text-white text-2xl" />
            ) : (
              <FiMenu className=" text-white text-2xl" />
            )}
          </button>

          <Link href={"/"}>
            <Image src={itech_logo} width={60} height={60} alt="itech logo" />
          </Link>

            <CartWidget />
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence className="rounded-r-md">
          {isOpen && (
            <motion.div
              key="menu-dropdown"
              initial={{ opacity: 0, y: -7 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-darkBlue absolute w-full h-screen py-1 shadow-lg"
              style={{ backdropFilter: "blur(5px)" }}
              onClick={closeMenu}
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link href={item.path}>
                    <div className="flex justify-start items-center px-4 py-2 hover:bg-navBtnHover space-x-5">
                      <p className="text-white text-3xl">{item.icon}</p>
                      <p className="ml-2 text-md text-white">{item.text}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {isShopPage && (
        <>
          <div className="w-11/12 md:w-3/5 lg:w-1/2 rounded-xl mb-12 mt-7 lg:mt-0 h-40 lg:h-72 flex items-center justify-center">
            <div className="hidden lg:flex">
              <Image
                src={add_banner}
                width={580}
                height={100}
                alt="add"
                className="rounded-xl"
              />
            </div>
            <div className="lg:hidden">
              <Image
                src={add_banner}
                width={440}
                height={100}
                alt="add"
                className="rounded-xl"
              />
            </div>
          </div>
          <section className="flex justify-start text-darkBlue absolute bottom-0 w-full h-[63%] sm:h-[63%] lg:h-[49%] 2xl:h-[53%] bg-gradient-to-b from-darkBlue -z-10" />
        </>
      )}
    </div>
  );
};
