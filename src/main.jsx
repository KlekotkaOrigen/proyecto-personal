import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DolarContext from "./components/contexts/DolarContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DolarContext>
      <App />
    </DolarContext>
  </React.StrictMode>
);

