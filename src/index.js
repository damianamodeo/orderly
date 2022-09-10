import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Main } from "./components/main/main";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
// import reportWebVitals from "./reportWebVitals";
// import { Test } from "./temp/test/test";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

serviceWorkerRegistration.register();

// reportWebVitals();
