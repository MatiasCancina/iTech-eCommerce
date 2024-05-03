"use client";
import { db, storage } from "@/firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import Swal from "sweetalert2";

const updateProduct = async (id, values, file) => {
  let fileURL = values.image;

  if (file) {
    const storageRef = ref(storage, id);
    const fileSnapshot = await uploadBytes(storageRef, file);
    fileURL = await getDownloadURL(fileSnapshot.ref);
  }

  const docRef = doc(db, "products", id.toString());

  return updateDoc(docRef, {
    title: values.title,
    description: values.description,
    inStock: Number(values.inStock),
    price: Number(values.price),
    type: values.type,
    image: fileURL,
  }).then(() => Swal.fire({
    position: "center",
    icon: "success",
    iconColor: "#457b9d",
    title: "Product updated!",
    showConfirmButton: false,
    timer: 1500,
  }));
};

const EditForm = ({ item }) => {
  const { title, description, inStock, price, type, image } = item;
  const [values, setValues] = useState({
    title,
    description,
    inStock,
    price,
    type,
    image,
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
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
      await updateProduct(item.id, values, file);
    }
  };

  return (
    <div className="my-16 p-8 mx-3 sm:mx-20 lg:mx-40 xl:mx-52 2xl:mx-96 select-none bg-white rounded">
      <h2 className="text-cyan font-semibold text-2xl pb-4">Update Product</h2>
      <form onSubmit={handleSubmit} className="px-20">
        <label className="text-black">Name: </label>
        <input
          type="text"
          value={values.title}
          required
          className="p-2 rounded w-full border border-cyan block mb-4"
          name="title"
          onChange={handleChange}
        />

        <label className="text-black">Image: </label>
        <input
          type="file"
          required
          className="p-2 rounded w-full border border-cyan block mb-4"
          name="image"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <label className="text-black">Category: </label>
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

        <label className="text-black">Price: </label>
        <input
          type="number"
          value={values.price}
          required
          className="p-2 rounded w-full border border-cyan block mb-4"
          name="price"
          onChange={handleChange}
        />

        <label className="text-black">Stock: </label>
        <input
          type="number"
          value={values.inStock}
          required
          className="p-2 rounded w-full border border-cyan block mb-4"
          name="inStock"
          onChange={handleChange}
        />

        <label className="text-black">Description: </label>
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
          className="bg-cyan rounded-md py-3 px-6 sm:px-10 text-white shadow-md"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditForm;
