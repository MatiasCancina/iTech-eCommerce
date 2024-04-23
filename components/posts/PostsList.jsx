import { PostCard } from "./PostCard";

export const PostsList = async () => {
  const posts = await fetch(`http://${process.env.VERCEL_URL}/api/posts`, {
    cache: "no-store",
    next: {
      revalidate: 30,
    },
  }).then((r) => r.json());

  return (
    <div className="grid md:grid-cols-2 2xl:grid-cols-3 w-full lg:px-40 xl:px-62 2xl:px-52 py-6 select-none">
      {posts.map((post) => (
        <div className="w-full" key={post.id}>
          <PostCard post={post} key={post.id} />
        </div>
      ))}
    </div>
  );
};
