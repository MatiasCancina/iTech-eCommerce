import { PostCard } from "./PostCard";
import { posts } from "./mockData";

export const PostsList = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full px-52 py-6 select-none">
      {posts.map((post) => (
        <div className="w-full" key={post.id}>
          <PostCard post={post} key={post.id} />
        </div>
      ))}
    </div>
  );
};
