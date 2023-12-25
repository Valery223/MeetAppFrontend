import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute({ isLoggedIn }) {
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
