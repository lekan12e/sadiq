import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { mockAuth } from '../auth/mockAuth';

const PrivateRoute = () => {
  return mockAuth.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
