import { Link } from "react-router-dom";
import "../assets/styles/about.css";

// about page component
const AboutPage = () => {
  return (
    <div className="about-container">
      {" "}
      <h1>About Page</h1>{" "}
      <p>
        Welcome to the about page. Lorem ipsum dolor sit amet consectetur.
      </p>
      <Link to='/'>
        <button className="click-btn">Go to Home Page</button>
      </Link>
    </div>
  );
};

export default AboutPage;
