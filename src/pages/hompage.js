import { useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import "../assets/styles/home.css";
// homepage component...
const HomePage = () => {
  // use location hook to get url params
  const Location = useLocation();
  console.log(Location);
  
  // useSearchParam hook to get the value of the search parameter
  const [searchParams, setSearchParams] = useSearchParams("search");
  // useEffect hook to update the search parameter
  useEffect(() => {
    // set the value of the search parameter
    setSearchParams({
      id: 156,
    });

    // setSearchParams((prev) => {
    //   return {
    //     ...prev,
    //     id: 156,
    //   };
    // });

    // Get the value of the search parameter
    console.log(searchParams.get("id"));
  }, [searchParams, setSearchParams]);

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
