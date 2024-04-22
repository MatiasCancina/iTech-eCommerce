'use client'
import { useAuthContext } from "../context/AuthContext";

const LogoutBtn = () => {
  const { logout } = useAuthContext();

  return <button onClick={logout} className="bg-red text-white py-3 px-6 sm:px-10 rounded-md shadow-md mt-5"> Log Out </button>;
};

export default LogoutBtn;
