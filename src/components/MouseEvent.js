import React, { useState } from "react";

const MouseEvent = () => {
  // state...
  const [state, setState] = useState("Initial State: Magic is Here!");
  // handle Mouse Over
  const handleMouseOver = (event) => {
    // console.log('you hovered over me!');
    setState("New State: Welcome to the Jungle!");
    // exit after updating state
    setTimeout(() => {
      setState("Initial State: Magic is Here!");
    }, 1000);
  };
  // render...
  return (
    <section className="main-container">
      <h1 className="hover-me" onMouseOver={handleMouseOver}>
        {state}
      </h1>
    </section>
  );
};

export default MouseEvent;
