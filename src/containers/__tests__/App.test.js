import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("App", () => {
  test("Renders without crashing", () => {
    const mountedApp = shallow(<App />);
  });

  // Checks if the component is rendering only 1 subcomponent named StoreLocator.js
  test("Renders a Store Locator", () => {
    const mountedApp = shallow(<App />);
    const locators = mountedApp.find("StoreLocator");
    expect(locators.length).toBe(1);
  });
});
