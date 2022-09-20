import React from "react";
import Avatar from "./Avatar";
import '../assets/styles/card.css';

// user profile card component
const UserProfileCard = () => {
  return (
    <div className="card">
      <Avatar />
      <div className="card-name">Chibuzor Uzoaru</div>
      <p>Frontend Engineer</p>
    </div>
  );
};

export default UserProfileCard;
