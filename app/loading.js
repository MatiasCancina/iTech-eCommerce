import itech_logo from "@/public/itech_logo.png";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="py-44 flex items-center justify-center">
        <div className="flex justify-center items-center w-full">
          <Image
            src={itech_logo}
            width={150}
            height={150}
            alt={"Loader"}
            className="animate-pulse"
          />
        </div>
    </div>
  );
};

export default Loading;
