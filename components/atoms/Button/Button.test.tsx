import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import { ThemeProvider } from "styled-components/native";
import { theme } from "../../../constants/theme";
import { Button } from "./Button";

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe("Button Component", () => {
  const defaultProps = {
    title: "Test Button",
    onPress: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const { getByText } = render(
      <TestWrapper>
        <Button {...defaultProps} />
      </TestWrapper>
    );

    expect(getByText("Test Button")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <TestWrapper>
        <Button {...defaultProps} onPress={mockOnPress} />
      </TestWrapper>
    );

    fireEvent.press(getByText("Test Button"));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it("shows loading text when loading", () => {
    const { getByText } = render(
      <TestWrapper>
        <Button {...defaultProps} loading={true} />
      </TestWrapper>
    );

    expect(getByText("Loading...")).toBeTruthy();
  });

  it("disables onPress when disabled", () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <TestWrapper>
        <Button {...defaultProps} onPress={mockOnPress} disabled={true} />
      </TestWrapper>
    );

    fireEvent.press(getByText("Test Button"));
    expect(mockOnPress).not.toHaveBeenCalled();
  });

  it("renders different variants correctly", () => {
    const variants = ["primary", "secondary", "outline", "ghost"] as const;

    variants.forEach((variant) => {
      const { getByText } = render(
        <TestWrapper>
          <Button {...defaultProps} variant={variant} />
        </TestWrapper>
      );
      expect(getByText("Test Button")).toBeTruthy();
    });
  });

  it("renders different sizes correctly", () => {
    const sizes = ["small", "medium", "large"] as const;

    sizes.forEach((size) => {
      const { getByText } = render(
        <TestWrapper>
          <Button {...defaultProps} size={size} />
        </TestWrapper>
      );
      expect(getByText("Test Button")).toBeTruthy();
    });
  });
});
