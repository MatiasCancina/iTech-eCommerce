import Image from "next/image";
import itech_logo from "@/public/itech_logo.png";
import Link from "next/link";

export async function generateMetadata({ params, searchParams }, parent) {
  return { title: `iTech - Us` };
}

export const Us = () => {
  return (
    <div className="my-16 px-3 sm:px-20 lg:px-40 xl:px-52 2xl:px-96 select-none">
      <div className="flex flex-col lg:flex-row bg-white p-10 rounded-xl">
        <div className="lg:w-1/2 flex flex-col justify-start items-center p-4 space-y-5">
          <h1 className="text-white text-3xl font-semibold py-3 rounded-xl from-darkBlue to-lightBue bg-gradient-to-br w-1/2 flex justify-center">
            iTech
          </h1>
          <p className="text-gray">
            At iTech, we´re passionate about providing innovative technological
            solutions that enhance your daily life. From ergonomic keyboards to
            high-resolution monitors and cutting-edge mice, we offer a wide
            range of carefully selected products to meet your technological
            needs.
          </p>
          <p className="text-gray">
            Have any questions or comments? Feel free to <Link href={'/contact'} className="text-blueLink font-medium">get in touch with us.</Link> Our customer service team is here to assist you with anything you need. Thank you for choosing iTech for
            all your technological needs!
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Image alt="itech_logo" src={itech_logo} width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Us;
