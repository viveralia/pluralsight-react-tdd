import React from "react";

const Map = ({ image = "default.jpg" }) => {
  return (
    <div className="MapBox">
      <img src={`images/${image}`} alt={image} />
    </div>
  );
};

export default Map;
