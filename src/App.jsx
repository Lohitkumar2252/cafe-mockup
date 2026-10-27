import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { Route, Routes } from "react-router";
import ReviewsPage from "./components/ReviewsPage";
import MenuPage from "./components/MenuPage";
import WorkshopsPage from "./components/WorkshopsPage";
import ReservationsPage from "./components/ReservationsPage";
import LocationPage from "./components/LocationPage";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/workshops" element={<WorkshopsPage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
        <Route path="/location" element={<LocationPage />} />
      </Routes>

     
      
    </div>
  );
};

export default App;
