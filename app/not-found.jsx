"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <di className="flex justify-start items-center flex-col py-52 select-none ">
        <div className="py-2">
          <h1 className="text-9xl text-slate-600 font-thin">SORRY</h1>
          <p className="text-5xl text-slate-600 font-light">
            we couldn´t find that page
          </p>
          <div className="flex space-x-3 mt-2">
            <p className="text-2xl text-slate-600 font-medium ">
              Try searching or go
            </p>
            <Link href={"/"} className="text-2xl text-blue-800 font-medium">
              iTech´s home page
            </Link>
          </div>
        </div>
      </di>
    </>
  );
}
