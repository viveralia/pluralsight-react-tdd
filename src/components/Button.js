import React from "react";

const Button = ({ location = "All locations", handleClick }) => {
  return (
    <button className="LocationButton" onClick={() => handleClick(location)}>
      {location}
    </button>
  );
};

export default Button;
