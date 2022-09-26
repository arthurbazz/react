import React, { useEffect, useState } from "react";

// define custom hook
const CustomHooks = (type) => {
  // set local state
  const [data, setData] = useState([]);

  // define useEffect hook...
  useEffect(() => {
    // cars list...
    const cars = [
      {
        id: 1,
        brand: "Audi",
        color: "Red",
        year: 2022,
      },
      {
        id: 2,
        brand: "BMW",
        color: "Black",
        year: 2021,
      },
      {
        id: 3,
        brand: "Mercedes",
        color: "White",
        year: 2020,
      },
    ];

    // books list...
    const books = [
      {
        id: 1,
        title: "The Alchemist",
      },
      {
        id: 2,
        title: "The Power of Now",
      },
      {
        id: 3,
        title: "The 48 Laws of Power",
      },
    ];

    // set data
    <div>{type === "cars" ? setData(cars) : setData(books)}</div>;
  }, [type]);

  // return data
  return [data];
  // return (
  //   <section className="main-page">
  //     <h1>Custom Hooks</h1>
  //     [data]
  //   </section>
  // );
};

// create root component => App
const CustomHooksApp = () => {
  //   // get data from custom hook
  //   const data = CustomHooks("cars");
  //   console.log(data);

  // set local state
//   const [type, setType] = useState("cars");
  const [type, setType] = useState("books");

  // set data
  const [data] = CustomHooks(type);

  // render...
  return (
    <section className="main-page">
      <h1>Custom Hooks</h1>
      <button className="click-btn" onClick={() => setType("cars")}>Cars</button>
      <button className="click-btn" onClick={() => setType("books")}>Books</button>

      <div>
        {data.map((cars) => (
          <div key={cars.id}>
            {/* <h3>{cars.id}</h3> */}
            <h3>{cars.brand}</h3>
            <h3>{cars.color}</h3>
            <h3>{cars.year}</h3>
          </div>
        ))}
      </div>

      <div>
        {data.map((books) => (
          <div key={books.id}>
            <h3>{books.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
export default CustomHooksApp;
