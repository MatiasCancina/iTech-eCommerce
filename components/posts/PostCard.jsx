import { IoPersonCircleOutline } from "react-icons/io5";
export const PostCard = ({ post }) => {
  return (
    <div className="p-10 m-5 bg-white rounded-lg shadow-xl  h-80 flex flex-col justify-center">
      <div className="flex justify-between items-center">
        <span className="font-light text-gray text-sm">{post.date}</span>
        <div className="flex items-center">
          <IoPersonCircleOutline className="text-3xl" />
          <h1 className="text-darkBlue font-bold">{post.name}</h1>
        </div>
      </div>
      <div className="mt-2">
        <h1 className="text-xl text-darkBlue font-bold">{post.title}</h1>
        <p className="mt-2 text-gray">{post.description}</p>
      </div>
    </div>
  );
};
