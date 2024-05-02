import { PostsList } from "@/components/posts/PostsList";

export async function generateMetadata({ params, searchParams }, parent) {
  return { title: `iTech - Posts` };
}

export const Posts = () => {
  return (
    <>
      <PostsList />;
    </>
  );
};

export default Posts;
