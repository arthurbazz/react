import React from "react";


// CarsList component..
const CarsList = () => {
  // cars
  const cars = ["Tesla", "Audi", "BMW", "Mercedes", "Volkswagen"];
  // create a list of cars
  const ListOfCars = cars.map((car) => {
    return <li key={car}>{car}</li>;
  });

  // render...
  return (
    <section>
      {/* display ordered list of cars */}
      <ol>{ListOfCars}</ol>
    </section>
  );
};

export default CarsList;
