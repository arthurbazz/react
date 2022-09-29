import { Link } from "react-router-dom";
import "../assets/styles/home.css";
// homepage component...
const HomePage = () => {
  return (
    <div className="home-container">
      {" "}
      <h1>Home Page</h1>{" "}
      <p>Welcome to the home page. Lorem ipsum dolor sit amet consectetur.</p>
      {/* <Link to="/">
        <button
          className="click-btn"
          style={({ isActive }) =>
            isActive ? { color: "#92B4BF" } : { color: "#fff" }
          }
        >
          Active: Home Page
        </button>
      </Link> */}
      <Link to="/about">
        <button className="click-btn">Go to About Page</button>
      </Link>
    </div>
  );
};

export default HomePage;
