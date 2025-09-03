import React from "react";
import { render } from "@testing-library/react-native";
import { Box } from "./Box";

describe("Box Component", () => {
  it("renders correctly with default spacing", () => {
    const component = render(<Box />);
    expect(component).toBeTruthy();
  });

  it("renders with xs gap", () => {
    const component = render(<Box gap="xs" />);
    expect(component).toBeTruthy();
  });

  it("renders with s gap", () => {
    const component = render(<Box gap="s" />);
    expect(component).toBeTruthy();
  });

  it("renders with m gap", () => {
    const component = render(<Box gap="m" />);
    expect(component).toBeTruthy();
  });

  it("renders with l gap", () => {
    const component = render(<Box gap="l" />);
    expect(component).toBeTruthy();
  });

  it("renders with xl gap", () => {
    const component = render(<Box gap="xl" />);
    expect(component).toBeTruthy();
  });
});
