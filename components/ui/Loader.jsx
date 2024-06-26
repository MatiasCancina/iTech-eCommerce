import itech_logo from "@/public/itech_logo.png";
import Image from "next/image";

const Loader = () => {
  return (
    <div className=" flex items-center justify-center w-full">
          <Image
            src={itech_logo}
            width={150}
            height={150}
            alt={"Loader"}
            className="animate-pulse"
          />
    </div>
  )
}

export default Loader