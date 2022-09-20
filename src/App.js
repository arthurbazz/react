// src/app.js
import React from "react";
import CarsList from "./components/CarsList";
import UserList from "./components/UserList";
import UserProfileCard from "./components/UserProfileCard";

// create root component => App
const App = () => {
  return (
    <section className="main-page">
      <UserProfileCard />
      <CarsList />
      <UserList />
    </section>
  );
};

export default App;
