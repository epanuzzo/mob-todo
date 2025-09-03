import React from "react";
import { render } from "@testing-library/react-native";
import { Text } from "./Text";

describe("Text Component", () => {
  it("renders correctly with default type (body)", () => {
    const { getByText } = render(<Text>Hello World</Text>);
    expect(getByText("Hello World")).toBeTruthy();
  });

  it("renders with largeTitle type", () => {
    const { getByText } = render(<Text type="largeTitle">Large Title</Text>);
    expect(getByText("Large Title")).toBeTruthy();
  });

  it("renders with title1 type", () => {
    const { getByText } = render(<Text type="title1">Title 1</Text>);
    expect(getByText("Title 1")).toBeTruthy();
  });

  it("renders with title2 type", () => {
    const { getByText } = render(<Text type="title2">Title 2</Text>);
    expect(getByText("Title 2")).toBeTruthy();
  });

  it("renders with title3 type", () => {
    const { getByText } = render(<Text type="title3">Title 3</Text>);
    expect(getByText("Title 3")).toBeTruthy();
  });

  it("renders with headline type", () => {
    const { getByText } = render(<Text type="headline">Headline</Text>);
    expect(getByText("Headline")).toBeTruthy();
  });

  it("renders with body type", () => {
    const { getByText } = render(<Text type="body">Body Text</Text>);
    expect(getByText("Body Text")).toBeTruthy();
  });

  it("renders with subheadline type", () => {
    const { getByText } = render(<Text type="subheadline">Subheadline</Text>);
    expect(getByText("Subheadline")).toBeTruthy();
  });

  it("renders with footnote type", () => {
    const { getByText } = render(<Text type="footnote">Footnote</Text>);
    expect(getByText("Footnote")).toBeTruthy();
  });

  it("renders with caption type", () => {
    const { getByText } = render(<Text type="caption">Caption</Text>);
    expect(getByText("Caption")).toBeTruthy();
  });

  it("passes through additional props", () => {
    const { getByText } = render(
      <Text type="body" testID="custom-text">
        Test Text
      </Text>
    );
    const textElement = getByText("Test Text");
    expect(textElement.props.testID).toBe("custom-text");
  });
});
