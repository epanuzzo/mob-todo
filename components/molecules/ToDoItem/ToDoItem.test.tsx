import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
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
    const { getByText, queryByTestId, getByTestId } = render(<ToDoItem {...mockProps} />);
    const content = getByText("Test todo item");

    // Initially actions should not be visible
    expect(queryByTestId("edit-button")).toBeNull();
    expect(queryByTestId("delete-button")).toBeNull();

    // Long press to show actions
    act(() => {
      fireEvent(content, "onLongPress");
    });

    expect(getByTestId("edit-button")).toBeTruthy();
    expect(getByTestId("delete-button")).toBeTruthy();
  });

  it("calls onEdit when edit button is pressed", () => {
    const { getByText, getByTestId } = render(<ToDoItem {...mockProps} />);
    const content = getByText("Test todo item");

    // Show actions first
    act(() => {
      fireEvent(content, "onLongPress");
    });

    const editButton = getByTestId("edit-button");
    act(() => {
      fireEvent.press(editButton);
    });

    expect(mockProps.onEdit).toHaveBeenCalledTimes(1);
  });

  it("shows delete confirmation modal when delete button is pressed", () => {
    const { getByText, getByTestId } = render(<ToDoItem {...mockProps} />);
    const content = getByText("Test todo item");

    // Show actions first
    act(() => {
      fireEvent(content, "onLongPress");
    });

    const deleteButton = getByTestId("delete-button");
    act(() => {
      fireEvent.press(deleteButton);
    });

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
    const { getByText, getByTestId } = render(<ToDoItem {...mockProps} />);
    const content = getByText("Test todo item");

    // Show actions first
    act(() => {
      fireEvent(content, "onLongPress");
    });

    // Press delete button
    const deleteButton = getByTestId("delete-button");
    act(() => {
      fireEvent.press(deleteButton);
    });

    // Confirm deletion
    const confirmButton = getByText("Delete");
    act(() => {
      fireEvent.press(confirmButton);
    });

    expect(mockProps.onDelete).toHaveBeenCalledTimes(1);
  });

  it("closes modal when cancel is pressed", () => {
    const { getByText, queryByText, getByTestId } = render(<ToDoItem {...mockProps} />);
    const content = getByText("Test todo item");

    // Show actions first
    act(() => {
      fireEvent(content, "onLongPress");
    });

    // Press delete button
    const deleteButton = getByTestId("delete-button");
    act(() => {
      fireEvent.press(deleteButton);
    });

    // Cancel deletion
    const cancelButton = getByText("Cancel");
    act(() => {
      fireEvent.press(cancelButton);
    });

    // Modal should be closed
    expect(queryByText("Delete Task")).toBeNull();
    expect(mockProps.onDelete).not.toHaveBeenCalled();
  });

  it("hides actions when content is pressed while actions are visible", () => {
    const { getByText, queryByTestId, getByTestId } = render(<ToDoItem {...mockProps} />);
    const content = getByText("Test todo item");

    // Show actions first
    act(() => {
      fireEvent(content, "onLongPress");
    });
    expect(getByTestId("edit-button")).toBeTruthy();

    // Press content again to hide actions
    act(() => {
      fireEvent.press(content);
    });
    expect(queryByTestId("edit-button")).toBeNull();
    expect(mockProps.onDone).not.toHaveBeenCalled();
  });
});
