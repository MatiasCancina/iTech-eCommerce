"use client";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/firebase/config";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

const createProduct = async (values) => {
  const id = uuidv4();
  const price = parseFloat(values.price);
  const inStock = parseInt(values.inStock);

  const docRef = doc(db, "products", id.toString());

  return setDoc(docRef, {
    ...values,
    id,
    price,
    inStock,
    image: values.image,
  }).then(() =>
    Swal.fire({
      position: "center",
      icon: "success",
      iconColor: "#457b9d",
      title: "Product created!",
      showConfirmButton: false,
      timer: 1500,
    })
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
    image: null,
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleImageChange = async (e) => {
    const storageRef = ref(storage, uuidv4());

    const fileSnapshot = await uploadBytes(storageRef, e.target.files[0]);

    const fileURL = await getDownloadURL(fileSnapshot.ref);

    setValues({ ...values, image: fileURL });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (values.title.length > 20) {
      Swal.fire({
        icon: "warning",
        title: "Name Limit Exceeded",
        text: "The name cannot exceed 25 characters.",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } else {
      createProduct(values);
    }
  };
  return (
    <div className="my-16 p-8 mx-3 sm:mx-20 lg:mx-40 xl:mx-52 2xl:mx-96 select-none bg-white rounded">
      <form onSubmit={handleSubmit} className="">
        <label>Name: </label>
        <input
          type="text"
          value={values.title}
          required
          className="p-2 rounded w-full border border-cyan block mb-4"
          name="title"
          onChange={handleChange}
        />

        <label>Image: </label>
        <input
          type="file"
          required
          className="p-2 rounded w-full border border-cyan block mb-4"
          name="image"
          onChange={handleImageChange}
        />

        <label>Category: </label>
        <select
          className="p-2 rounded w-full border border-cyan block mb-4"
          name="type"
          required
          onChange={handleChange}
          value={values.type}
        >
          <option value="" disabled>
            Select a category
          </option>
          <option value="monitors">Monitors</option>
          <option value="keyboards">Keyboards</option>
          <option value="mouses">Mouses</option>
        </select>

        <label>Price: </label>
        <input
          type="number"
          value={values.price}
          required
          className="p-2 rounded w-full border border-cyan block mb-4"
          name="price"
          onChange={handleChange}
        />

        <label>Stock: </label>
        <input
          type="number"
          value={values.inStock}
          required
          className="p-2 rounded w-full border border-cyan block mb-4"
          name="inStock"
          onChange={handleChange}
        />

        <label>Description: </label>
        <input
          type="text"
          value={values.description}
          required
          className="resize-none h-24 p-2 rounded w-full border border-cyan block mb-4"
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
