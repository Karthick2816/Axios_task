import React from "react";

import Create from "../Create";
import Edit from "../Edit";
import { Navigate } from "react-router-dom";
import Dashboard from "../DashBoard";

const AppRoutes = [
  {
    path: "/",
    element: <Dashboard />,
    exact: true,
  },
  {
    path: "/create",
    element: <Create />,
    exact: true,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
    exact: true,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
    exact: false,
  },
];

export default AppRoutes;
