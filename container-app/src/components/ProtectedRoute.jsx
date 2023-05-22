import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Auth from "./Auth";

const ProtectedRoute = ({ redirectPath = "/auth" }) => {
  const [auth, setAuth] = useState(
    localStorage.getItem("authenticationState") || "Login"
  );

  // Listen for localStorage authentication change
  useEffect(() => {
    const handleStorageChange = () => {
      setAuth(localStorage.getItem("authenticationState"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  if (auth === "Login") {
    return <Auth />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
