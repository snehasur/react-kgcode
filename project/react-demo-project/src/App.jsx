import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import EmployeeListing from "./components/EmployeeListing";
import EmployeeEdit from "./components/EmployeeEdit";
import NotFound from "./components/NotFound"; // Import the NotFound components

// Define the router configuration
const router = createBrowserRouter([
  {
    path: "/", // Base path for the app
    element: <Layout />, // Main layout for all authenticated routes
    children: [
      // Child routes inside the layout
      {
        path: "/", // Default route (Employee Listing)
        element: <EmployeeListing />,
      },
      {
        path: "employee/edit/:id", // Employee Edit route
        element: <EmployeeEdit />,
      },
      {
        path: "*", // Wildcard route for 404 Not Found
        element: <NotFound />,
      },
    ],
  },
]);

// App components wrapping the RouterProvider with the defined router
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
