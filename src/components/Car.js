import React from "react";

const Car = ({ data }) => {
    
  // data distructure
  const { brand, color, year } = data;
  // render...
  return (
    <div>
      <h1>This is a Prop</h1>
      <p className="car">
        {`This ${brand}! has a color of ${color} and was manufactured
        in year ${year}`}
      </p>
    </div>
  );
};

export default Car;
