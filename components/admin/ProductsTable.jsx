import Image from "next/image";
import Link from "next/link";

const ProductsTable = async () => {
  const items = await fetch(`http://localhost:3000/api/products/all`, {
    cache: "no-store",
    next: {
      revalidate: 30,
    },
  }).then((r) => r.json());

  return (
    <div className="overflow-x-auto">
      <table className="w-full px-5 my-5 rounded-md bg-white text-xs lg:text-sm text-left text-gray">
        <thead className="text-base text-gray uppercase">
          <tr>
            <th scope="col" className="px-3 py-2">
              Name
            </th>
            <th scope="col" className="px-3 py-2">
              Price
            </th>
            <th scope="col" className="px-3 py-2">
              In stock
            </th>
            <th scope="col" className="px-3 py-2">
              Type
            </th>
            <th scope="col" className="px-3 py-2">
              Image
            </th>
            <th scope="col" className="px-3 py-2">
              Id
            </th>
            <th scope="col" className="px-3 py-2">
              Description
            </th>
            <th scope="col" className="px-3 py-2">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="p-2"> {item.title}</td>
              <td className="p-2">{item.price}</td>
              <td className="p-2">{item.inStock}</td>
              <td className="p-2">{item.type}</td>
              <td className="p-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                />
              </td>
              <td className="p-2">{item.id}</td>
              <td className="p-2 truncate max-w-prose">{item.description}</td>
              <td className="p-2">
                <Link
                  href={`/admin/edit/${item.id}`}
                  className="rounded bg-cyan p-2 text-white"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
