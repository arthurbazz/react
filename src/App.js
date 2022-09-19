// src/app.js
import React from "react";
import CarsList from "./components/CarsList";
import UserProfileCard from "./components/UserProfileCard";

// create root component => App
const App = () => {
  const users = [
    {
      Name: "Arthur",
      Bio: "I am a web developer",
      Avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      Name: "Grace",
      Bio: "Product designer",
      Avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      Name: "Alex",
      Bio: "Software Engineer",
      Avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
  ];

  // UserList Component
  const UserList = users.map((user) => {
    return (
      <div>
        <img src={user.Avatar} alt="Avatar" />
        <h3>{user.Name}</h3>
        <p>{user.Bio}</p>
      </div>
    );
  });

  return (
    <section className="main-page">
      <UserProfileCard />
      <CarsList />
      {UserList}
    </section>
  );
};

export default App;
