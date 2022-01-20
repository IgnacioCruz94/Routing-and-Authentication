import { Navigate } from "react-router-dom";
import React, { useState } from "react";

function PrivateRoute({ children }) {
  function useAuth() {
    const [isAuth] = useState(localStorage.getItem("authorized") === "1");
    return isAuth;
  }
  const auth = useAuth();
  return auth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
