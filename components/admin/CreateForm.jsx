"use client";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

const createProduct = async (values) => {
  const docRef = doc(db, "products", values.id);
  return setDoc(docRef, { ...values }).then(() =>
    console.log("Product created!")
  );
};

const CreateForm = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    inStock: 100,
    price: 0,
    type: "",
    id: 13,
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    createProduct(values);
  };
  return (
    <div className="my-16 p-8 mx-3 sm:mx-20 lg:mx-40 xl:mx-52 2xl:mx-96 select-none bg-white rounded">
      <form onSubmit={handleSubmit} className="space-y-4">
        <label>Id: </label>
        <input
          type="number"
          value={values.id}
          required
          className="p-2 rounded w-full border border-cyan block"
          name="id"
          onChange={handleChange}
        />

        <label>Name: </label>
        <input
          type="text"
          value={values.title}
          required
          className="p-2 rounded w-full border border-cyan block"
          name="title"
          onChange={handleChange}
        />

        <label>Price: </label>
        <input
          type="number"
          value={values.price}
          required
          className="p-2 rounded w-full border border-cyan block"
          name="price"
          onChange={handleChange}
        />

        <label>Stock: </label>
        <input
          type="number"
          value={values.inStock}
          required
          className="p-2 rounded w-full border border-cyan block"
          name="inStock"
          onChange={handleChange}
        />

        <label>Category: </label>
        <input
          type="text"
          value={values.type}
          required
          className="p-2 rounded w-full border border-cyan block"
          name="type"
          onChange={handleChange}
        />

        <label>Description: </label>
        <input
          type="text"
          value={values.description}
          required
          className="resize-none h-24 p-2 rounded w-full border border-cyan block"
          name="description"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-cyan py-3 px-6 sm:px-10 text-white shadow-md"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
