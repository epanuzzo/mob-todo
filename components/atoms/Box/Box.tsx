import React from "react";
import { BoxProps } from "./Box.types";
import { StyledBox } from "./Box.styled";

/**
 * Box component for adding consistent margin-bottom spacing
 */
export const Box: React.FC<BoxProps> = ({ gap, children }) => {
  return <StyledBox gap={gap}>{children}</StyledBox>;
};
