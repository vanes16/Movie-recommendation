// import React from 'react';
// import ReactDOM from 'react-dom';
// import { HashRouter } from "react-router-dom";

// // core styles
// import "./scss/volt.scss";

// // vendor styles
// import "react-datetime/css/react-datetime.css";

// import HomePage from "./pages/HomePage";
// import ScrollToTop from "./components/ScrollToTop";

// ReactDOM.render(
//   <HashRouter>
//     <ScrollToTop />
//     <HomePage />
//   </HashRouter>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom/client";
import "./Assets/CSS/index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
