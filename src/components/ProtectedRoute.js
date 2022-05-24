import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children  }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log("ProtectedRoute this", isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }
  return children;
}

export default ProtectedRoute;