import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-start items-center flex-col py-52 select-none ">
    <div className="py-2">
      <h1 className="text-9xl text-gray font-thin">SORRY</h1>
      <p className="text-5xl text-gray font-light">
        we couldn´t find that page
      </p>
      <div className="flex space-x-3 mt-2">
        <p className="text-2xl text-gray font-medium ">
          Try searching or go
        </p>
        <Link href={"/"} className="text-2xl text-blueLink font-medium">
          iTech´s home page
        </Link>
      </div>
    </div>
  </div>
  );
}
