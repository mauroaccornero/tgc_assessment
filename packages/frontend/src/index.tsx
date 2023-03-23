import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ItemsProvider } from "./context/ItemsContext";

const domRootElement = document.getElementById("root");

if (!domRootElement) {
  throw new Error("Root container missing in index.html");
}

const root = createRoot(domRootElement);
root.render(
  <React.StrictMode>
    <ItemsProvider>
      <App />
    </ItemsProvider>
  </React.StrictMode>
);
