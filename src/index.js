import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "components/App";


// import "./hooks/mouseEffectSmoke";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="user-admin">

        <App />

    </BrowserRouter>
  </React.StrictMode>
);
