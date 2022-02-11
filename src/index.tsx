import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SearchContextProvider } from "./hooks/SearchContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <SearchContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SearchContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
