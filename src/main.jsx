import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DolarContext from "./components/contexts/DolarContext";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Listado from "./components/pages/Listado";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path=":categoria" element={<Listado />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DolarContext>
      <RouterProvider router={router} />
    </DolarContext>
  </React.StrictMode>
);
