// src/app.js
import React from "react";
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
    </section>
  );
};

export default App;
