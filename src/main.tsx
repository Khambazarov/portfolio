import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// GA4 initialisieren
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
window.dataLayer = window.dataLayer || [];
function gtag(...args: unknown[]) {
  window.dataLayer.push(args);
}
gtag("js", new Date());
gtag("config", GA_MEASUREMENT_ID);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
