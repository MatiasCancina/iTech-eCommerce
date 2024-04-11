"use client";
import { useEffect } from "react";
import ErrorUI from "../components/ui/Error.jsx";

export default function Error({ errorMessage, reset }) {
  useEffect(() => {
    console.error(errorMessage);
  }, [errorMessage]);

  return <ErrorUI />;
}
