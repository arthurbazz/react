import React from "react";

const ChangeEvent = () => {
  // handle change...
  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };
  return (
    <section className="form-container">
      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          //   elements of the form...
          const elements = event.target.elements;
          //   destructure to get values from form...
          const { name, email, phone } = elements;
          alert(
            `Hello ${name.value}! Your email is ${email.value} and your phone number is ${phone.value}`
          );
        }}
      >
        <p>Change Events & Form Events</p>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter your name"
          name="name"
        />
        <input type="email" placeholder="Enter your email" name="email" />
        <input
          type="number"
          placeholder="Enter your phone number"
          name="phone"
        />
        <button type="submit" className="click-btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ChangeEvent;
