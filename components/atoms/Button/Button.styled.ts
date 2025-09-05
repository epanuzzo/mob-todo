import styled from "styled-components/native";
import { theme } from "../../../constants/theme";

interface StyledButtonProps {
  variant: "primary" | "secondary" | "outline" | "ghost";
  size: "small" | "medium" | "large";
  disabled: boolean;
}

const getBackgroundColor = (variant: string, disabled: boolean) => {
  if (disabled) return theme.colors.text.tertiary;

  switch (variant) {
    case "primary":
      return theme.colors.primary;
    case "secondary":
      return theme.colors.secondary;
    case "outline":
      return "transparent";
    case "ghost":
      return "transparent";
    default:
      return theme.colors.primary;
  }
};

const getTextColor = (variant: string, disabled: boolean) => {
  if (disabled) return theme.colors.text.secondary;

  switch (variant) {
    case "primary":
    case "secondary":
      return theme.colors.surface;
    case "outline":
    case "ghost":
      return theme.colors.primary;
    default:
      return theme.colors.surface;
  }
};

const getPadding = (size: string) => {
  switch (size) {
    case "small":
      return `${theme.spacing.sm}px ${theme.spacing.md}px`;
    case "medium":
      return `${theme.spacing.md}px ${theme.spacing.lg}px`;
    case "large":
      return `${theme.spacing.lg}px ${theme.spacing.xl}px`;
    default:
      return `${theme.spacing.md}px ${theme.spacing.lg}px`;
  }
};

export const StyledButton = styled.TouchableOpacity<StyledButtonProps>`
  background-color: ${({ variant, disabled }: StyledButtonProps) =>
    getBackgroundColor(variant, disabled)};
  border-radius: ${theme.borderRadius.md}px;
  padding: ${({ size }: StyledButtonProps) => getPadding(size)};
  align-items: center;
  justify-content: center;
  border-width: ${({ variant }: StyledButtonProps) =>
    variant === "outline" ? 1 : 0}px;
  border-color: ${({ variant, disabled }: StyledButtonProps) =>
    variant === "outline"
      ? disabled
        ? theme.colors.text.tertiary
        : theme.colors.primary
      : "transparent"};
  opacity: ${({ disabled }: StyledButtonProps) => (disabled ? 0.6 : 1)};
`;

export const ButtonText = styled.Text<StyledButtonProps>`
  color: ${({ variant, disabled }: StyledButtonProps) =>
    getTextColor(variant, disabled)};
  font-size: ${({ size }: StyledButtonProps) => {
    switch (size) {
      case "small":
        return theme.typography.footnote.fontSize;
      case "medium":
        return theme.typography.body.fontSize;
      case "large":
        return theme.typography.headline.fontSize;
      default:
        return theme.typography.body.fontSize;
    }
  }}px;
  font-weight: ${theme.typography.headline.fontWeight};
`;
