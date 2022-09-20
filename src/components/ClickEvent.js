import React, { useState } from "react";

const ClickEvent = () => {
  // state...
  const [counter, setCounter] = useState(0);
  // handle increament...
  const handleIncreament = (event) => {
    event.preventDefault();
    // update state...
    setCounter((prev) => prev + 1);
    // console.log(counter);
  };
  // handle decreament...
  const handleDecreament = (event) => {
    event.preventDefault();
    // update state...
    setCounter((prev) => prev - 1);
    // console.log(counter);
  };

  // render...
  return (
    <section className="counter-container">
      <p>This is the Click Event</p>
      <div className="counter-label">{counter}</div>
      <button className="click-btn" onClick={handleIncreament}>
        Increament
      </button>
      <button className="click-btn" onClick={handleDecreament}>
        Decreament
      </button>
    </section>
  );
};

export default ClickEvent;
