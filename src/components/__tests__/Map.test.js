// When using enzyme, we don't need to import React-DOM, but we do need shallow

import React from "react";
import { shallow } from "enzyme";
import Map from "../Map";

describe("Map Component", () => {
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
  // Since we stablished a map with props, we need to create another map with no props and test it, instead of using the global one created before each test above
  test("Displays the none map when no params are given", () => {
    const deafultMapNoParams = shallow(<Map />);
    const defaultMap = deafultMapNoParams.find('img[src="images/default.jpg"]');
    expect(defaultMap.length).toBe(1);
  });

  // Passing the image as props
  test("Displays the map image passed to it as props", () => {
    const testMap = mountedMap.find('img[src="images/testmap.png"]');
    expect(testMap.length).toBe(1);
  });
});
