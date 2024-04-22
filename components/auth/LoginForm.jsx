"use client";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const LoginForm = () => {
  const { registerUser, loginUser, googleLogin } = useAuthContext();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-darkBlue">
      <form
        onSubmit={handleSubmit}
        className="bg-white py-4 px-6 rounded-xl max-w-md w-full"
      >
        <h2>Login</h2>
        <input
          type="email"
          value={values.email}
          required
          placeholder="Your email"
          className="p-2 rounded w-full border border-cyan block my-4"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          value={values.password}
          required
          placeholder="Your password"
          className="p-2 rounded w-full border border-cyan block my-4"
          name="password"
          onChange={handleChange}
        />
        <div  className="flex justify-between gap-4">

        <button className="bg-cyan py-3 px-6 sm:px-10 text-white shadow-md" 
          onClick={() => loginUser(values)}
        >
          Log In
        </button>
        <button
          className="bg-cyan py-3 px-6 sm:px-10 text-white shadow-md"
          onClick={() => googleLogin()}
          >
          Log In with Google
        </button>
        <button
          className="bg-cyan py-3 px-6 sm:px-10 text-white shadow-md"
          onClick={() => registerUser(values)}
          >
          Register
        </button>
          </div>
      </form>
    </div>
  );
};

export default LoginForm;
