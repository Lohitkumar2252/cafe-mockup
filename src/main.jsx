import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MenuPage from "./components/MenuPage.jsx";
import WorkshopsPage from "./components/WorkshopsPage.jsx";
import ReservationsPage from "./components/ReservationsPage.jsx";
import ReviewsPage from "./components/ReviewsPage.jsx";
import LocationPage from "./components/LocationPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
