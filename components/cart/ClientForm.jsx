"use client";
import { db } from "@/firebase/config";
import { Timestamp, doc, getDoc, setDoc, writeBatch } from "firebase/firestore";
import { useCartContext } from "../context/CartContext";
import { useState } from "react";
import Swal from "sweetalert2";


const createOrder = async (values, items) => {
  //   const docsPromises = items.map((id) => {
  //     const docRef = doc(db, "products", id.toString());
  //     return getDoc(docRef);
  //   });

  //   const docs = await Promise.all(docsPromises);
  //   const batch = writeBatch(db);
  //   const outOfStock = [];

  //   docs.forEach((doc) => {
  //       const { inStock } = doc.data();
  //       console.log(inStock);
  //     const itemInCart = items.find((item) => item.id === doc.id);

  //     if (itemInCart.quantity >= inStock) {
  //       batch.update(doc.ref, { inStock: inStock - itemInCart.quantity });
  //     } else {
  //       outOfStock.push(itemInCart);
  //     }
  //   });

  //   if (outOfStock.length > 0) return outOfStock;

  const order = {
    client: values,
    items: items.map((item) => ({
      title: item.title,
      price: item.price,
      id: item.id,
      quantity: item.quantity,
    })),
    date: new Date().toISOString(),
  };

  const docId = Timestamp.fromDate(new Date()).toMillis();
  const orderRef = doc(db, "orders", String(docId));
  //   await batch.commit();
  await setDoc(orderRef, order);

  return docId;
};

const ClientForm = () => {
  const { cart } = useCartContext();
  const [values, setValues] = useState({
    email: "",
    adress: "",
    name: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createOrder(values, cart);
    Swal.fire({
      position: "top-end",
      icon: "success",
      iconColor: "#457b9d",
      title: "Purchase done!",
      text: `Order id: ${result}`,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 xl:w-1/2 my-6 pb-4">
      <input
        type="text"
        required
        placeholder="Your name"
        className="p-2 rounded-xl border border-lightBue h-10 text-lg text-black"
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        required
        placeholder="Your adress"
        className="p-2 rounded-xl border border-lightBue h-10 text-lg text-black"
        name="adress"
        onChange={handleChange}
      />
      <input
        type="email"
        required
        placeholder="Your email"
        className="p-2 rounded-xl border border-lightBue h-10 text-lg text-black"
        name="email"
        onChange={handleChange}
      />

      <button
        type="submit"
        className="bg-cyan rounded-sm py-3 px-6 sm:px-10 text-white shadow-md"
      >
        Finish my purchase
      </button>
    </form>
  );
};

export default ClientForm;
