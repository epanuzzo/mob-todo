import React from "react";
import { TextProps } from "./Text.types";
import { StyledText } from "./Text.styled";

/**
 * Text component with consistent typography from theme
 */
export const Text: React.FC<TextProps> = ({
  type = "body",
  children,
  ...props
}) => {
  return (
    <StyledText type={type} {...props}>
      {children}
    </StyledText>
  );
};
