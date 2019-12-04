import React from "react";

const Button = ({ location = "All locations" }) => {
  return <button className="LocationButton">{location}</button>;
};

export default Button;
