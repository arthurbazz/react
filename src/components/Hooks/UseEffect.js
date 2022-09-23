import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  // click handler
  const clickHandler = (e) => {
    e.preventDefault();
    // update state
    setCount((prev) => prev + 1);
  };
  // define useEffect hook...
  useEffect(() => {
    if(count > 2) {
        alert('useEffect: App Rendered!');
        console.log('useEffect: App Rendered!');
    }
  }, [count]);

  // render
  return(
    <section className="counter-container">
        <button className="click-btn" onClick={clickHandler}>Click Me!</button>
    </section>
  ) ;
};

export default UseEffect;
