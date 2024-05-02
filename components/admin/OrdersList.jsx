import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

const getOrders = async () => {
  const ordersRef = collection(db, "orders");
  const querySnapshot = await getDocs(ordersRef);
  const docs = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return docs;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);

  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  
  const formattedTime = `${date.getHours()}:${date.getMinutes()}`;
  
  return { date: formattedDate, time: formattedTime };
};

const formatName = (name) => {
  const words = name.split(" ");

  const formattedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return formattedWords.join(" ");
};

const Orders = async () => {
  const orders = await getOrders();

  return (
    <div className="bg-white rounded my-12 py-10 flex flex-col items-center justify-center">
      <h2 className="w-11/12 border-b border-gray pb-3 px-3 font-semibold text-2xl md:text-3xl lg:text-5xl text-cyan">
        Orders
      </h2>

      <ul className="grid mt-4 grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-6 w-11/12">
        {orders.map((order) => (
          <li
            key={order.id}
            className="bg-lightBue rounded-lg drop-shadow-2xl p-4 space-y-2 hover:-translate-y-2 transition"
          >
            <p className="text-black lg:text-lg 2xl:text-xl font-semibold">
              Id: {order.id}
            </p>
            <p className="text-black text-sm  lg:text-base 2xl:text-lg">
              Buyer: {formatName(order.client.name)}
            </p>
            <p className="text-black text-sm lg:text-base 2xl:text-lg">
              Email: {order.client.email}
            </p>
            <p className="text-black text-sm lg:text-base 2xl:text-lg">
              Adress: {order.client.adress}
            </p>
            <p className="text-black text-sm lg:text-base 2xl:text-lg">
              Date: {formatDate(order.date).date}
            </p>
            <p className="text-black text-sm lg:text-base 2xl:text-lg">
              Time: {formatDate(order.date).time}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
