import React from "react";

const ChangeEvent = () => {

    // handle change...
    const handleChange = (event) => {
        event.preventDefault();
        console.log(event.target.value);
    }
    return(
        <form action=""className="form-container">
            <p>Change Events</p>
            <input onChange={handleChange} type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Enter your email" />
            <input type="number" placeholder="Enter your phone number" />
            <button type="submit" className="click-btn">Submit</button>
        </form>
    );
}

export default ChangeEvent;