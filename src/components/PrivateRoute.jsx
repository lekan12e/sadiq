import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { mockAuth } from "../auth/mockAuth";

const PrivateRoute = () => {
  return <Outlet />;
};

export default PrivateRoute;
