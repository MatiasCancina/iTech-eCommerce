"use client";
import { useEffect } from "react";

export default function Error({ errorMessage, reset }) {
  useEffect(() => {
    console.error(errorMessage);
  }, [errorMessage]);

  return (
    <div className="flex justify-start items-center flex-col py-52 select-none ">
      <div className="py-2">
        <h1 className="text-9xl text-gray font-thin">SORRY</h1>
        <p className="text-5xl text-gray font-light">
          something go wrong
        </p>
        <div className="flex mt-2">
          <button onClick={reset} className="text-2xl text-blueLink font-medium">
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
