import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyled } from "./GlobalStyled";
import Router from "./Router";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <GlobalStyled />
      <Router />
    </HelmetProvider>
  </React.StrictMode>
);
