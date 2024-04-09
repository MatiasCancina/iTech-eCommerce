"use client";
import { useState } from "react";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    text: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      body: JSON.stringify(values),
    });
    Swal.fire({
      position: "top-end",
      icon: "success",
      iconColor: "#457b9d",
      title: "Message sent!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className=" my-16 px-3 sm:px-20 lg:px-40 xl:px-52 2xl:px-96 select-none">
      <h1 className="font-semibold text-4xl border-b border-gray text-cyan">
        CONTACT US
      </h1>
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 xl:w-3/4 my-6"
        >
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              className="p-2 rounded-xl border border-lightBue h-14 text-lg text-black"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              className="p-2 rounded-xl border border-lightBue h-14 text-lg text-black"
            />
          </div>
          <input
            type="email"
            required
            placeholder="Email Adress"
            className="p-2 rounded-xl border border-lightBue h-14 text-lg text-black"
            name="email"
            onChange={handleChange}
          />

          <textarea
            required
            placeholder="Leave us your message"
            className="resize-none h-24 p-2 rounded-xl border border-lightBue text-lg text-black"
            name="text"
            onChange={handleChange}
          />

          <div className="flex justify-end items-end">
            <button
              type="submit"
              className="bg-cyan py-3 px-6 sm:px-10 text-white shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
