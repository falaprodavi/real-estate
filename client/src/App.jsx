import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/HomePage";
import { Layout } from "./routes/layout/layout.jsx";
import { listPageLoader, singlePageLoader } from "./lib/loaders";
import SinglePage from "./routes/SinglePage.jsx";
import Login from "./routes/Login.jsx";
import Register from "./routes/Register.jsx";
import ListPage from "./routes/ListPage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
