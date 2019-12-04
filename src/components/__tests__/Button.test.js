// When using enzyme, we don't need to import React-DOM, but we do need shallow

import React from "react";
import { shallow } from "enzyme";
import Button from "../Button";

describe("Button", () => {
  // Mounts the Button component with Enzyme before each test to avoid code repetition
  let mountedButton;
  beforeEach(() => {
    mountedButton = shallow(<Button />);
  });

  // Renders
  it("Renders without crashing", () => {
    const mountedButton = shallow(<Button />);
  });

  // Renders an HTML button
  it("Renders an HTML button", () => {
    const buttons = mountedButton.find("button");
    expect(buttons.length).toBe(1);
  });
});

describe("When a location is passed to it", () => {
  // Mounts the Button and the props and passes them with the spread operator
  let mountedButton;
  let props;
  beforeEach(() => {
    props = {
      location: "Location1"
    };
    mountedButton = shallow(<Button {...props} />);
  });

  test("It displays the location", () => {
    const locName = mountedButton.find(".LocationButton");
    expect(locName.text()).toEqual("Location1");
  });
});

describe("When no location is passed to it", () => {
  // Mounts the Button and the props and passes them with the spread operator
  let mountedButton;
  let props;
  beforeEach(() => {
    props = {
      location: undefined
    };
    mountedButton = shallow(<Button {...props} />);
  });

  test("It displays the location", () => {
    const locName = mountedButton.find(".LocationButton");
    expect(locName.text()).toEqual("All locations");
  });
});
