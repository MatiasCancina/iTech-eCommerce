import ProductsTable from "@/components/admin/ProductsTable";
import React from "react";

const Admin = () => {
  return (
    <div className="my-16 px-3 sm:px-20 select-none">
      <h2 className="font-semibold text-4xl border-b border-gray text-cyan">
        Administration Panel
      </h2>
      <ProductsTable />
    </div>
  );
};

export default Admin;
