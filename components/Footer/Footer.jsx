import React from "react";

const Footer = () => {
  return (
    <div className="w-full bottom-0 bg-white flex flex-col justify-center items-center px-96">

      {/*footer boxes*/}
      <div className="flex py-10 space-x-10">
        <div className="flex flex-col justify-center items-center text-center w-1/2 border border-gray-200 p-3 px-28 rounded-md">
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
        <div className="flex flex-col justify-center items-center text-center w-1/2 border border-gray-200 p-3 px-28 rounded-md">
          <span className="flex justify-center items-center font-medium text-slate-600">
            Conocé las normas que aplican cuando comprás
          </span>
          <span className="text-sm text-blue-500 cursor-pointer">
            Ver contratos de adhesión - Ley N.º 24.240 de Defensa del Consumidor
          </span>
        </div>
      </div>
      
      <div className="border border-t-1 border-gray-200 w-screen flex items-center justify-center">
        contact info
      </div>
    </div>
  );
};

export default Footer;
