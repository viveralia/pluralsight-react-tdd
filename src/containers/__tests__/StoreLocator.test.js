// When using enzyme, we don't need to import React-DOM, but we do need shallow

// TODO: Testing React Components not finished, refactor to class component with lifecycle methods

import React from "react";
import { shallow } from "enzyme";
import StoreLocator from "../StoreLocator";

describe("StoreLocator", () => {
  // Mounts the StoreLocator component with Enzyme before each test to avoid code repetition
  let mountedStoreLocator;
  beforeEach(() => {
    mountedStoreLocator = shallow(<StoreLocator />);
  });

  // Renders
  it("Renders without crashing", () => {
    const mountedStoreLocator = shallow(<StoreLocator />);
  });

  // Checks if the component is rendering only 1 subcomponent named Header.js
  it("Renders a header", () => {
    const headers = mountedStoreLocator.find("Header");
    expect(headers.length).toBe(1);
  });

  // Checks that two buttons are rendering inside this component
  it("Renders al least two buttons", () => {
    const buttons = mountedStoreLocator.find("Button");
    expect(buttons.length).toBeGreaterThanOrEqual(2);
  });

  // Checks that only one map is rendering inside the component
  it("Renders only one map", () => {
    const maps = mountedStoreLocator.find("Map");
    expect(maps.length).toBe(1);
  });

  // Testing API requests in ComponentDidMount
  it("calls axios.get in component did mount", () => {
    return mountedStoreLocator
      .instance()
      .componentDidMount()
      .then(() => {
        expect(axios.get).toHaveBeenCalled();
      });
  });
});
