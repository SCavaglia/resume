import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { initializeTheme } from "./hooks/use-appearance.tsx";
import { initializeColorTheme } from "./hooks/use-color-theme.ts";
import { ScrollToTop } from "./components/navigation/scroll-to-top.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/resume">
     <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
);
// Initialisation des thèmes
initializeTheme();
initializeColorTheme();