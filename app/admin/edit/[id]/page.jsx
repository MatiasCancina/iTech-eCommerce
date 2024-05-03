import EditForm from "@/components/admin/EditForm";

const EditPage = async ({ params }) => {
  const { id } = params;

  const item = await fetch(
    `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/product/${id}`,
    {
      cache: "no-store",
    }
  ).then((r) => r.json());

  return (
    <>
      <EditForm item={item} />
    </>
  );
};

export default EditPage;
