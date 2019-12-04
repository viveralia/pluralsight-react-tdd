import React, { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Map from "../components/Map";

const StoreLocator = () => {
  // States
  const [shops] = useState([
    {
      location: "Portland",
      address: "123 Portland Dr"
    },
    {
      location: "Astoria",
      address: "123 Astoria Dr"
    },
    {
      location: undefined,
      address: undefined
    }
  ]);
  const [currentMap, setCurrentMap] = useState("none.jpg");

  // JSX view
  return (
    <div>
      <Header />
      <div>
        {shops.map(({ location }, i) => (
          <Button key={i} location={location} />
        ))}
      </div>
      <Map image={currentMap} />
    </div>
  );
};

export default StoreLocator;
