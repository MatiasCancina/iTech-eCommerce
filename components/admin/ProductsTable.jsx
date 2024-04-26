import Image from "next/image";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

const ProductsTable = async () => {
  const items = await fetch(`http://localhost:3000/api/products/all`, {
    cache: "no-store",
    next: {
      revalidate: 30,
    },
  }).then((r) => r.json());

  return (
    <div className="overflow-x-auto">
      <Link
        href="admin/create"
        className="bg-cyan py-3 px-4 lg:px-6 sm:px-10 rounded-md text-white shadow-md "
      >
        Create new
      </Link>
      <table className="w-full mt-5 rounded-md bg-white text-xs lg:text-sm text-left text-gray ">
        <thead className="text-base text-gray uppercase ">
          <tr>
            <th scope="col" className="px-3 py-2">
              Name
            </th>
            <th scope="col" className="px-3 py-2 text-center">
              Price
            </th>
            <th scope="col" className="px-3 py-2 text-center">
              In stock
            </th>
            <th scope="col" className="px-3 py-2 text-center">
              Type
            </th>
            <th scope="col" className="px-3 py-2 text-center">
              Image
            </th>
            <th scope="col" className="px-3 py-2 text-center">
              Id
            </th>
            <th scope="col" className="px-3 py-2">
              Description
            </th>
            <th scope="col" className="px-3 py-2 text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="p-2 truncate"> {item.title}</td>
              <td className="p-2 text-center">$ {item.price}</td>
              <td className="p-2 text-center">{item.inStock}</td>
              <td className="p-2 text-center">{item.type}</td>
              <td className="p-2 text-center">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={80}
                  />
                ) : (
                  <>
                    <p>no image </p>
                  </>
                )}
              </td>
              <td className="p-2 text-center">{item.id}</td>
              <td className="p-2 truncate max-w-prose">{item.description}</td>
              <td className="flex space-x-3 justify-center">
                <Link href={`/admin/edit/${item.id}`}>
                  <FaRegEdit className="text-gray text-xl " />
                </Link>
                <button>
                  <FiTrash2 className="text-red text-xl " />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
