import styled from "styled-components/native";
import { theme } from "../../../constants/theme";
import { BoxProps } from "./Box.types";

const getSpacing = (gap?: string) => {
  switch (gap) {
    case "xs":
      return theme.spacing.xs;
    case "s":
      return theme.spacing.sm;
    case "m":
      return theme.spacing.md;
    case "l":
      return theme.spacing.lg;
    case "xl":
      return theme.spacing.xl;
    default:
      return theme.spacing.md; // default to medium if no gap is provided
  }
};

export const StyledBox = styled.View<BoxProps>`
  margin-bottom: ${({ gap }: BoxProps) => getSpacing(gap)}px;
  width: 100%;
`;
