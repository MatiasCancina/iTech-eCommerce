import React from "react";

const Footer = () => {
  return (
    <div className="w-full bottom-0 bg-white flex flex-col justify-center items-center">
      {/*footer boxes*/}
      <div className="flex flex-col md:flex-row justify-center items-center py-10 space-y-3 md:space-y-0 md:space-x-4  xl:space-x-5 2xl:space-x-10">
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
            Ver contratos de adhesión - Ley N.º 24.240 de Defensa del Consumidor
          </span>
        </div>
      </div>

      <div className="hidden border border-t-1 border-gray-200 w-screen md:flex items-center justify-center">
        contact info
      </div>
    </div>
  );
};

export default Footer;
