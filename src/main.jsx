import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ToDoContextProvider from "./context/ToDoContext";

ReactDOM.render(
  <React.StrictMode>
    <ToDoContextProvider>
      <App />
    </ToDoContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
