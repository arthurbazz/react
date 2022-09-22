// src/app.js
import React from "react";
import Car from "./components/Car";
import CarsList from "./components/CarsList";
import ChangeEvent from "./components/ChangeEvent";
import ClickEvent from "./components/ClickEvent";
import MouseEvent from "./components/MouseEvent";
// import UserList from "./components/UserList";
import UserProfileCard from "./components/UserProfileCard";

// create root component => App
const App = () => {
  // render...
  return (
    <section className="main-page">
      <UserProfileCard />
      <CarsList />
      {/* <UserList /> */}

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
    </section>
  );
};

export default App;
