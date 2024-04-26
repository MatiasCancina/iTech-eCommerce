"use client";
import { useAuthContext } from "../context/AuthContext";

const LogoutBtn = () => {
  const { logout } = useAuthContext();

  return (
    <>
      <button
        onClick={logout}
        className="bg-red text-white py-2 px-3 lg:py-3 lg:px-6 rounded-md shadow-md"
      >
        Log Out
      </button>
    </>
  );
};

export default LogoutBtn;
