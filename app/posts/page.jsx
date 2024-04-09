import Image from "next/image";
import imgProductRandom from "@/public/imgProductRandom.png";

export const Posts = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-xl px-10 my-4 py-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <span className="font-light text-gray">mar 10, 2019</span>
          <a
            className="px-2 py-1 bg-gray text-borderGray font-bold rounded hover:bg-lightBue"
            href="#"
          >
            Design
          </a>
        </div>
        <div className="mt-2">
          <a
            className="text-2xl text-darkBlue font-bold hover:text-gray"
            href="#"
          >
            Accessibility tools for designers and developers
          </a>
          <p className="mt-2 text-gray">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <a className="text-blueLink hover:underline" href="#">
            Read more
          </a>
          <div>
            <a className="flex items-center" href="#">
              <Image
                className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                src={imgProductRandom}
                width={100}
                height={100}
                alt="avatar"
              />
              <h1 className="text-darkBlue font-bold">Khatab wedaa</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
