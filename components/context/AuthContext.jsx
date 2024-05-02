"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db, provider } from "@/firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const router = useRouter();

  const [user, setUser] = useState({
    logged: false,
    email: null,
    uid: null,
  });

  const registerUser = async (values) => {
    await createUserWithEmailAndPassword(auth, values.email, values.password);
  };

  const loginUser = async (values) => {
    await signInWithEmailAndPassword(auth, values.email, values.password);
  };

  const logout = async () => {
    await signOut(auth);
  };

  const googleLogin = async () => {
    await signInWithPopup(auth, provider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "roles", user.uid);
        const userDoc = await getDoc(docRef);

        if (userDoc.data()?.role === "admin") {
          setUser({
            logged: true,
            email: user.email,
            uid: user.uid,
          });
        } else {
          router.push("/unauthorized");
          logout();
        }
      } else {
        setUser({
          logged: false,
          email: null,
          uid: null,
        });
      }
    });
  }, [router]);

  return (
    <AuthContext.Provider
      value={{ user, registerUser, loginUser, logout, googleLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
