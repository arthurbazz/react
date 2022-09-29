// src/app.js
import React from "react";
// components
import Car from "./components/Car";
import CarsList from "./components/CarsList";
import ChangeEvent from "./components/ChangeEvent";
import ClickEvent from "./components/ClickEvent";
import CustomHooksApp from "./components/Hooks/CustomHooks";
import UseEffect from "./components/Hooks/UseEffect";
import MouseEvent from "./components/MouseEvent";
import UserProfileCard from "./components/UserProfileCard";
// Routes...
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
// pages
import HomePage from "./pages/hompage";
import AboutPage from "./pages/aboutpage";


// create root component => App
const App = () => {
  // render...
  return (
    <section className="main-page">
      <UserProfileCard />
      <CarsList />

      {/* events */}
      <ClickEvent />
      <ChangeEvent />
      <MouseEvent />

      {/* passing an object as prop */}
      <Car data={{
        brand: 'Audi',
        color: 'Red',
        year: 2022
      }} />

      {/* hooks */}
      <UseEffect />
      <CustomHooksApp />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </section>
  );
};

export default App;
