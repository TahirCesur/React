import React from "react";
import ReactDOM from "react-dom";
// Not ; 1 ve 2. satırdaki 2 importta node_modules kütühanesi ile bağlantı kurar..
// Olmazsa olmazdır...
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
