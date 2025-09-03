import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ToDoItem } from "./ToDoItem";

describe("ToDoItem Component", () => {
  const mockProps = {
    text: "Test todo item",
    onDone: jest.fn(),
    onEdit: jest.fn(),
    onDelete: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly with basic props", () => {
    const { getByText } = render(<ToDoItem text="Test todo" />);
    expect(getByText("Test todo")).toBeTruthy();
  });

  it("renders with done state", () => {
    const { getByText } = render(
      <ToDoItem text="Completed todo" done={true} />
    );
    expect(getByText("Completed todo")).toBeTruthy();
  });

  it("calls onDone when content is pressed", () => {
    const { getByText } = render(<ToDoItem {...mockProps} />);
    const content = getByText("Test todo item");

    fireEvent.press(content);
    expect(mockProps.onDone).toHaveBeenCalledTimes(1);
  });

  it("shows action buttons on long press", () => {
    const { getByText, queryByText } = render(<ToDoItem {...mockProps} />);
    const content = getByText("Test todo item");

    // Initially actions should not be visible
    expect(queryByText("Edit")).toBeNull();
    expect(queryByText("Delete")).toBeNull();

    // Long press to show actions
    fireEvent(content, "onLongPress");

    expect(getByText("Edit")).toBeTruthy();
    expect(getByText("Delete")).toBeTruthy();
  });

  it("calls onEdit when edit button is pressed", () => {
    const { getByText } = render(<ToDoItem {...mockProps} />);
    const content = getByText("Test todo item");

    // Show actions first
    fireEvent(content, "onLongPress");

    const editButton = getByText("Edit");
    fireEvent.press(editButton);

    expect(mockProps.onEdit).toHaveBeenCalledTimes(1);
  });

  it("shows delete confirmation modal when delete button is pressed", () => {
    const { getByText, queryByText } = render(<ToDoItem {...mockProps} />);
    const content = getByText("Test todo item");

    // Show actions first
    fireEvent(content, "onLongPress");

    const deleteButton = getByText("Delete");
    fireEvent.press(deleteButton);

    // Modal should be visible
    expect(getByText("Delete Task")).toBeTruthy();
    expect(
      getByText(
        "Are you sure you want to delete this task? This action cannot be undone."
      )
    ).toBeTruthy();
    expect(getByText("Cancel")).toBeTruthy();
  });

  it("calls onDelete when delete is confirmed", () => {
    const { getByText } = render(<ToDoItem {...mockProps} />);
    const content = getByText("Test todo item");

    // Show actions first
    fireEvent(content, "onLongPress");

    // Press delete button
    const deleteButton = getByText("Delete");
    fireEvent.press(deleteButton);

    // Confirm deletion
    const confirmButton = getByText("Delete");
    fireEvent.press(confirmButton);

    expect(mockProps.onDelete).toHaveBeenCalledTimes(1);
  });

  it("closes modal when cancel is pressed", () => {
    const { getByText, queryByText } = render(<ToDoItem {...mockProps} />);
    const content = getByText("Test todo item");

    // Show actions first
    fireEvent(content, "onLongPress");

    // Press delete button
    const deleteButton = getByText("Delete");
    fireEvent.press(deleteButton);

    // Cancel deletion
    const cancelButton = getByText("Cancel");
    fireEvent.press(cancelButton);

    // Modal should be closed
    expect(queryByText("Delete Task")).toBeNull();
    expect(mockProps.onDelete).not.toHaveBeenCalled();
  });

  it("hides actions when content is pressed while actions are visible", () => {
    const { getByText, queryByText } = render(<ToDoItem {...mockProps} />);
    const content = getByText("Test todo item");

    // Show actions first
    fireEvent(content, "onLongPress");
    expect(getByText("Edit")).toBeTruthy();

    // Press content again to hide actions
    fireEvent.press(content);
    expect(queryByText("Edit")).toBeNull();
    expect(mockProps.onDone).not.toHaveBeenCalled();
  });
});
