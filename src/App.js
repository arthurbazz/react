// src/app.js
import React from "react";
import CarsList from "./components/CarsList";
import ClickEvent from "./components/ClickEvent";
import UserList from "./components/UserList";
import UserProfileCard from "./components/UserProfileCard";

// create root component => App
const App = () => {
  return (
    <section className="main-page">
      <UserProfileCard />
      <CarsList />
      <UserList />

      {/* events */}
      <ClickEvent />
    </section>
  );
};

export default App;
