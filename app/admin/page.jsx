import LogoutBtn from "@/components/admin/LogoutBtn";
import ProductsTable from "@/components/admin/ProductsTable";

export async function generateMetadata({ params, searchParams }, parent) {
  return { title: `iTech - Admin` };
}

const Admin = () => {
  return (
    <div className="my-16 px-3 sm:px-20 select-none">
      <div className="flex justify-between items-center font-medium border-b border-gray">
        <h2 className="font-semibold flex text-2xl lg:text-4xl  text-cyan">
          Administration Panel
        </h2>
        <LogoutBtn />
      </div>
      <ProductsTable />
    </div>
  );
};

export default Admin;
