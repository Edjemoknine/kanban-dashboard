import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Calender from "./pages/Calender/Calender.jsx";
import Board from "./pages/Board/Board.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",

    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "calender",
        element: <Calender />,
      },
      {
        path: "board",
        element: <Board />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
