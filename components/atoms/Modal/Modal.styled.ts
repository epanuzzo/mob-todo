import styled from "styled-components/native";
import { theme } from "../../../constants/theme";

interface StyledModalButtonProps {
  variant: "primary" | "secondary" | "danger";
}

export const ModalOverlay = styled.View`
  flex: 1;
  background-color: ${theme.colors.overlay};
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.View`
  background-color: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.lg}px;
  padding: ${theme.spacing.lg}px;
  margin: ${theme.spacing.lg}px;
  width: 80%;
  shadow-color: ${theme.shadows.lg.shadowColor};
  shadow-offset: ${theme.shadows.lg.shadowOffset.width}px
    ${theme.shadows.lg.shadowOffset.height}px;
  shadow-opacity: ${theme.shadows.lg.shadowOpacity};
  shadow-radius: ${theme.shadows.lg.shadowRadius}px;
  elevation: ${theme.shadows.lg.elevation};
`;

export const ModalTitle = styled.Text`
  font-size: ${theme.typography.title3.fontSize}px;
  font-weight: ${theme.typography.title3.fontWeight};
  line-height: ${theme.typography.title3.lineHeight}px;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md}px;
  text-align: center;
`;

export const ModalText = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  font-weight: ${theme.typography.body.fontWeight};
  line-height: ${theme.typography.body.lineHeight}px;
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.lg}px;
  text-align: center;
`;

export const ModalButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const getButtonBackgroundColor = (variant: string) => {
  switch (variant) {
    case "primary":
      return theme.colors.primary;
    case "danger":
      return theme.colors.error;
    case "secondary":
    default:
      return theme.colors.surfaceAlt;
  }
};

const getButtonTextColor = (variant: string) => {
  switch (variant) {
    case "primary":
    case "danger":
      return theme.colors.text.inverted;
    case "secondary":
    default:
      return theme.colors.text.primary;
  }
};

export const ModalButton = styled.TouchableOpacity<StyledModalButtonProps>`
  flex: 1;
  padding: ${theme.spacing.md}px;
  border-radius: ${theme.borderRadius.md}px;
  margin: 0 ${theme.spacing.xs}px;
  background-color: ${({ variant }: StyledModalButtonProps) =>
    getButtonBackgroundColor(variant)};
`;

export const ModalButtonText = styled.Text<StyledModalButtonProps>`
  color: ${({ variant }: StyledModalButtonProps) =>
    getButtonTextColor(variant)};
  font-size: ${theme.typography.body.fontSize}px;
  font-weight: ${theme.typography.headline.fontWeight};
  text-align: center;
`;
