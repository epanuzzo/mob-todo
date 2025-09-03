import styled from "styled-components/native";
import { theme } from "../../../constants/theme";
import { TypographyType } from "./Text.types";

interface StyledTextProps {
  type: TypographyType;
}

const getTypographyStyles = (type: TypographyType) => {
  const typography = theme.typography[type];
  return `
    font-size: ${typography.fontSize}px;
    font-weight: ${typography.fontWeight};
    line-height: ${typography.lineHeight}px;
  `;
};

export const StyledText = styled.Text<StyledTextProps>`
  color: ${theme.colors.text.primary};
  ${({ type }: StyledTextProps) => getTypographyStyles(type)}
`;
