import React, { createContext, useContext } from "react";
import Avatar from "./Avatar";
import "../assets/styles/card.css";

// create context for the App..
const AuthContext = createContext({
  // isAuthenticated: false,
  user: {
    username: "arthurbazz",
    name: "Chibuzor Uzoaru",
    email: "chibuzorarthur@gmail.com",
    position: "Frontend Engineer",
  },
   // adding Authenticated value
  verified: true,
});

// // Define Context Provider...
const AuthProvider = (props) => {
  return (
    <AuthContext.Provider
      value={{
        // isAuthenticated: false,
        user: {
          username: "arthurbazz",
          name: "Chibuzor Uzoaru",
          email: "chibuzorarthur@gmail.com",
          position: "Frontend Engineer",
        },
        // adding Authenticated value
        // verified: true,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

// user profile card component
const UserProfileCard = () => {
  // using the global state
  const { user, verified } = useContext(AuthContext);
  console.log(user);
  return (
    <AuthProvider>
      <div className="card">
        <Avatar />
        {/* <h1>User Profile</h1> */}
        <div className="card-name">Username: {user.username}</div>
        <div className="card-name">Name: {user.name}</div>
        <p>Email: {user.email}</p>
        <p>Position: {user.position}</p>
        <div>Verified: {verified ? 'Yes' : 'No'}</div>
      </div>
    </AuthProvider>
  );
};

export default UserProfileCard;
