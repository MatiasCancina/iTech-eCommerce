"use client";
import { GoMail } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import Image from "next/image";
import itech_logo from "@/public/itech_logo.png";

const Footer = () => {
  return (
    <footer className=" bottom-0 bg-white flex flex-col justify-center items-center select-none">
          <div className="flex flex-col md:flex-row justify-center items-center py-10 space-y-3 md:space-y-0 md:space-x-4 xl:space-x-5 2xl:space-x-10">
            <div className="flex flex-col justify-center items-center text-center w-11/12 lg:w-1/2 border border-gray-200 p-3 2xl:px-36 py-6 sm:py-2 md:py-6 xl:py-7 2xl:py-3 rounded-md">
              <span className="font-medium text-slate-600">
                Botón de arrepentimientio
              </span>
              <span className="text-sm items-center text-blue-500 cursor-pointer">
                Cancelar compra
              </span>
              <span className="text-sm text-blue-500 cursor-pointer">
                Cancelar seguro y/o garantía
              </span>
            </div>
            <div className="flex flex-col justify-center items-center text-center w-11/12 lg:w-1/2 border border-gray-200 p-3 xl:px-16 rounded-md">
              <span className="flex justify-center items-center font-medium text-slate-600">
                Conocé las normas que aplican cuando comprás
              </span>
              <span className="text-sm text-blue-500 cursor-pointer">
                Ver contratos de adhesión - Ley N.º 24.240 de Defensa del
                Consumidor
              </span>
            </div>
          </div>

          <div className=" w-screen pb-6 lg:pb-10 lg:border-b border-gray-200">
            <div className="flex flex-row justify-center items-center">
              <div className="flex justify-center items-center cursor-pointer space-x-2">
                <GoMail className="text-xl text-zinc-500" />
                <span className="text-zinc-500 font-medium">
                  ayuda@itech.com
                </span>
              </div>
            </div>
          </div>
      <div className="hidden w-screen lg:flex flex-col justify-start md:px-32 lg:px-40 xl:px-52 2xl:px-96 pt-3">
        <div className="flex space-x-3 justify-center">
          <span className="flex text-sm text-slate-900 cursor-pointer text-center">
            Trabajá con nosotros
          </span>
          <span className="flex text-sm text-slate-900 cursor-pointer text-center">
            Terminos y condiciones
          </span>
          <span className="flex text-sm text-slate-900 cursor-pointer text-center">
            Accesibilidad
          </span>
          <span className="flex text-sm text-slate-900 cursor-pointer text-center">
            Ayuda
          </span>
          <span className="flex text-sm text-slate-900 cursor-pointer text-center">
            Defensa del consumido
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between w-full space-y-3 lg:space-y-0 md:px-32 lg:px-40 xl:px-52 2xl:px-96 pb-8">
        <div>
          <div className="flex flex-col items-center lg:items-start space-y-3 lg:space-y-2 pt-4 lg:pt-0">
            <div className="flex space-x-1 justify-center items-center">
              <Image
                src={itech_logo}
                width={70}
                height={70}
                alt="itech logo"
                className="lg:hidden"
              />
              <span className="text-gray-950 font-extrabold text-5xl">
                iTech
              </span>
            </div>

            <span className="text-xs text-gray-400">
              Copyright © 2024 iTech S.R.L.
            </span>
          </div>
        </div>

        <div className="flex space-x-1 items-center">
          <FaFacebookF className="border-2 border-gray-800 rounded-full p-1 text-4xl cursor-pointer" />
          <FaTwitter className="border-2 border-gray-800 rounded-full p-1 text-4xl cursor-pointer" />
          <FaInstagram className="border-2 border-gray-800 rounded-full p-1 text-4xl cursor-pointer" />
          <FaRedditAlien className="border-2 border-gray-800 rounded-full p-1 text-4xl cursor-pointer" />
        </div>

        <Image
          src={itech_logo}
          width={100}
          height={100}
          alt="itech logo"
          className="hidden lg:flex"
        />
      </div>
    </footer>
  );
};

export default Footer;
