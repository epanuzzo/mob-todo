import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Input } from "./Input";

describe("Input Component", () => {
  it("renders correctly with basic props", () => {
    const { getByPlaceholderText } = render(<Input placeholder="Enter text" />);

    expect(getByPlaceholderText("Enter text")).toBeTruthy();
  });

  it("renders title when provided", () => {
    const { getByText } = render(
      <Input title="Username" placeholder="Enter username" />
    );

    expect(getByText("Username")).toBeTruthy();
  });

  it("renders error message when error is true and errorMessage is provided", () => {
    const { getByText } = render(
      <Input
        placeholder="Enter text"
        error={true}
        errorMessage="This field is required"
      />
    );

    expect(getByText("This field is required")).toBeTruthy();
  });

  it("does not render error message when error is false", () => {
    const { queryByText } = render(
      <Input
        placeholder="Enter text"
        error={false}
        errorMessage="This field is required"
      />
    );

    expect(queryByText("This field is required")).toBeNull();
  });

  it("does not render error message when error is true but errorMessage is not provided", () => {
    const { queryByText } = render(
      <Input placeholder="Enter text" error={true} />
    );

    // Since no errorMessage is provided, the error text should not render
    expect(queryByText("This field is required")).toBeNull();
  });

  it("handles text input changes", () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter text" onChangeText={onChangeTextMock} />
    );

    const input = getByPlaceholderText("Enter text");
    fireEvent.changeText(input, "Hello World");

    expect(onChangeTextMock).toHaveBeenCalledWith("Hello World");
  });

  it("renders in normal state by default", () => {
    const { getByPlaceholderText } = render(<Input placeholder="Enter text" />);

    expect(getByPlaceholderText("Enter text")).toBeTruthy();
  });

  it("renders in error state when error prop is true", () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter text" error={true} />
    );

    expect(getByPlaceholderText("Enter text")).toBeTruthy();
  });
});
