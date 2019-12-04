// When using enzyme, we don't need to import React-DOM, but we do need shallow

import React from "react";
import { shallow } from "enzyme";
import Map from "../Map";

describe("Map", () => {
  // Mounts the Map component with Enzyme before each test to avoid code repetition
  let mountedMap;
  let props;
  beforeEach(() => {
    props = {
      location: undefined,
      image: "testmap.png"
    };
    mountedMap = shallow(<Map {...props} />);
  });

  // Renders
  it("Renders without crashing", () => {
    const mountedMap = shallow(<Map />);
  });

  // Renders an image inside the map
  test("Contains an image", () => {
    const imgs = mountedMap.find("img");
    expect(imgs.length).toBe(1);
  });

  // Default map image
  test("Displays the none map when no params are given", () => {
    const defaultMap = mountedMap.find('img[src="images/default.jpg"]');
    expect(defaultMap.length).toBe(1);
  });
});
