// src/app.js
import React from "react";
import Car from "./components/Car";
import CarsList from "./components/CarsList";
import ChangeEvent from "./components/ChangeEvent";
import ClickEvent from "./components/ClickEvent";
import CustomHooksApp from "./components/Hooks/CustomHooks";
import UseEffect from "./components/Hooks/UseEffect";
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

      {/* hooks */}
      <UseEffect />
      <CustomHooksApp />
    </section>
  );
};

export default App;
