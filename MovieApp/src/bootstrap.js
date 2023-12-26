import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import HeaderPage from "./components/HeaderPage";


ReactDOM.render(
  <BrowserRouter>
  {/* <HeaderPage /> */}
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
