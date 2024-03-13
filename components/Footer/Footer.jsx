import React from "react";

const Footer = () => {
  return (
    <div className="w-full bottom-0 bg-white flex flex-col justify-center items-center px-96">
      {/*footer boxes*/}
      <div className="flex py-10 space-x-10">
        <div className="flex flex-col justify-center items-center text-center w-full border border-gray-200 p-3 px-20 rounded-md">
          <text className="font-medium text-slate-600">
            Botón de arrepentimientio
          </text>
          <text className="text-sm items-center text-blue-500 cursor-pointer">
            Cancelar compra
          </text>
          <text className="text-sm text-blue-500 cursor-pointer">
            Cancelar seguro y/o garantía
          </text>
        </div>
        <div className="flex flex-col justify-center items-center text-center w-full border border-gray-200 p-3 px-20 rounded-md">
          <text className="flex justify-center items-center font-medium text-slate-600">
            Conocé las normas que aplican cuando comprás
          </text>
          <text className="text-sm text-blue-500 cursor-pointer">
            Ver contratos de adhesión - Ley N.º 24.240 de Defensa del Consumidor
          </text>
        </div>
      </div>
      <br />
      <div className="border border-t-1 border-gray-200 w-screen flex items-center justify-center">
        contact info
      </div>
    </div>
  );
};

export default Footer;
