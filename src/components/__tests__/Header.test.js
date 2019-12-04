import React from "react";
import { shallow } from "enzyme";
import Header from "../Header";

describe("Header", () => {
  // Mounts the Header component with Enzyme before each test to avoid code repetition
  let mountedHeader;
  beforeEach(() => {
    mountedHeader = shallow(<Header />);
  });

  // Renders
  test("Renders without crashing", () => {
    shallow(<Header />);
  });

  // Looks for an image with the logo path using CSS like selectors thanks to enzyme
  test("Renders a logo", () => {
    const logoImg = mountedHeader.find('img[src="images/logo.png"]');
    expect(logoImg.length).toBe(1);
  });
});
