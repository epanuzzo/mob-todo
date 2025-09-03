import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Modal } from "./Modal";

describe("Modal Component", () => {
  const mockOnClose = jest.fn();
  const mockButton1 = jest.fn();
  const mockButton2 = jest.fn();

  const defaultProps = {
    visible: true,
    title: "Test Modal",
    text: "This is a test modal",
    buttons: [
      { text: "Cancel", onPress: mockButton1, variant: "secondary" as const },
      { text: "Confirm", onPress: mockButton2, variant: "primary" as const },
    ],
    onClose: mockOnClose,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly with title and text", () => {
    const { getByText } = render(<Modal {...defaultProps} />);

    expect(getByText("Test Modal")).toBeTruthy();
    expect(getByText("This is a test modal")).toBeTruthy();
  });

  it("renders all buttons", () => {
    const { getByText } = render(<Modal {...defaultProps} />);

    expect(getByText("Cancel")).toBeTruthy();
    expect(getByText("Confirm")).toBeTruthy();
  });

  it("calls button onPress when pressed", () => {
    const { getByText } = render(<Modal {...defaultProps} />);

    const cancelButton = getByText("Cancel");
    const confirmButton = getByText("Confirm");

    fireEvent.press(cancelButton);
    expect(mockButton1).toHaveBeenCalledTimes(1);

    fireEvent.press(confirmButton);
    expect(mockButton2).toHaveBeenCalledTimes(1);
  });

  it("renders with single button", () => {
    const singleButtonProps = {
      ...defaultProps,
      buttons: [{ text: "OK", onPress: mockButton1 }],
    };

    const { getByText, queryByText } = render(<Modal {...singleButtonProps} />);

    expect(getByText("OK")).toBeTruthy();
    expect(queryByText("Cancel")).toBeNull();
    expect(queryByText("Confirm")).toBeNull();
  });

  it("renders with danger variant button", () => {
    const dangerButtonProps = {
      ...defaultProps,
      buttons: [
        { text: "Cancel", onPress: mockButton1 },
        { text: "Delete", onPress: mockButton2, variant: "danger" as const },
      ],
    };

    const { getByText } = render(<Modal {...dangerButtonProps} />);

    expect(getByText("Cancel")).toBeTruthy();
    expect(getByText("Delete")).toBeTruthy();
  });

  it("renders with multiple buttons", () => {
    const multiButtonProps = {
      ...defaultProps,
      buttons: [
        { text: "Button 1", onPress: jest.fn() },
        { text: "Button 2", onPress: jest.fn() },
        { text: "Button 3", onPress: jest.fn() },
      ],
    };

    const { getByText } = render(<Modal {...multiButtonProps} />);

    expect(getByText("Button 1")).toBeTruthy();
    expect(getByText("Button 2")).toBeTruthy();
    expect(getByText("Button 3")).toBeTruthy();
  });

  it("does not render when visible is false", () => {
    const { queryByText } = render(<Modal {...defaultProps} visible={false} />);

    expect(queryByText("Test Modal")).toBeNull();
    expect(queryByText("This is a test modal")).toBeNull();
  });

  it("uses default variant when not specified", () => {
    const defaultVariantProps = {
      ...defaultProps,
      buttons: [{ text: "Default Button", onPress: mockButton1 }],
    };

    const { getByText } = render(<Modal {...defaultVariantProps} />);

    expect(getByText("Default Button")).toBeTruthy();
  });
});
