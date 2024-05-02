import { db } from "@/firebase/config";
import { doc, getDocs } from "firebase/firestore";

const getOrders = async () => {
  const ordersRef = doc(db, "orders");
  const querySnapshot = await getDocs(ordersRef);
  const docs = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return docs;
};

const Orders = async () => {
  const orders = await getOrders();

  return (
    <div className="py-10 md:px-32 lg:px-40 xl:px-52 2xl:px-96 flex items-center justify-center">
      <h2 className="text-2xl my-10 border-b border-gray pb-4">Orders</h2>

      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <p>Buyer: {order.client.name}</p>
            <p>Date: {new Date(`${order.client.date}`)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
