import ProductCard from "./ProductCard";

const ProductsList = async ({ category }) => {
  try {
    const items = await fetch(
      `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products/${category}`,
      {
        cache: "force-cache",
        next: {
          tags: ["products"],
        },
      }
    ).then((r) => r.json());

    if (!items || !items.length || items === "undefined") {
      console.log("No products yet");
    }

    return (
      <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full select-none">
        {items.map((item) => (
          <div className="w-full" key={item.id}>
            <ProductCard key={item.id} item={item} />
          </div>
        ))}
      </section>
    );
  } catch (error) {
    console.log(error);
  }
};

export default ProductsList;

// const items = [
//   {
//     description:
//       "The Logitech G Pro X Mechanical Gaming Keyboard is known for its customizable switches, compact design, and durable construction. It offers swappable switches for personalized typing experience and customizable RGB lighting.",
//     id: "17faf7a9-d27e-4115-af6c-79fe32d128ec",
//     image:
//       "https://dist.contentdriver.com.au/logitech/PRO-X-920-009239/images/pro-x-kb-hero.png",
//     inStock: 100,
//     price: 129.99,
//     title: "Logitech G Pro X",
//     category: "keyboards",
//   },
//   {
//     description:
//       "The Razer BlackWidow Elite is a popular mechanical gaming keyboard known for its tactile switches, customizable RGB lighting, and dedicated macro keys. It offers Razer Hypershift technology for advanced key remapping and onboard memory for saving profiles.",
//     id: "259cf4a1-d28f-4490-98f1-fe87a4e8ff5b",
//     image:
//       "https://assets2.razerzone.com/images/pnx.assets/af826d2feba4d6574c40c9287941d567/ornata-v3-500x500.png",
//     inStock: 100,
//     price: 129.99,
//     title: "Razer BlackWidow Elite",
//     category: "mouses",
//   },
//   {
//     description:
//       "The Corsair K95 RGB Platinum XT is a premium mechanical gaming keyboard known for its customizable RGB lighting, dedicated macro keys, and durable aluminum frame. It offers Cherry MX switches for tactile feedback and N-Key Rollover for precise gaming performance.",
//     id: "2d74e41a-50b7-41db-b5fa-492f3e4cfe8b",
//     image:
//       "https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/products/Gaming-Keyboards/CH-9127414-NA/Gallery/K95_PLATINUM_RGB_XT_01.webp",
//     inStock: 100,
//     price: 129.99,
//     title: "Corsair K95 RGB Platinum XT",
//     category: "monitors",
//   },
// ];
