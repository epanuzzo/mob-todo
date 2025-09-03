import styled from "styled-components/native";
import { theme } from "../../../constants/theme";

interface StyledToDoItemProps {
  done: boolean;
}

interface StyledActionButtonProps {
  variant: "edit" | "delete";
}

export const ItemContainer = styled.View`
  background-color: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.md}px;
  margin-bottom: ${theme.spacing.sm}px;
  shadow-color: ${theme.shadows.sm.shadowColor};
  shadow-offset: ${theme.shadows.sm.shadowOffset.width}px
    ${theme.shadows.sm.shadowOffset.height}px;
  shadow-opacity: ${theme.shadows.sm.shadowOpacity};
  shadow-radius: ${theme.shadows.sm.shadowRadius}px;
  elevation: ${theme.shadows.sm.elevation};
  flex-direction: row;
  align-items: center;
`;

export const ContentContainer = styled.TouchableOpacity<StyledToDoItemProps>`
  flex: 1;
  padding: ${theme.spacing.md}px;
  background-color: ${({ done }: StyledToDoItemProps) =>
    done ? theme.colors.highlight : theme.colors.surface};
  border-radius: ${theme.borderRadius.md}px;
  opacity: ${({ done }: StyledToDoItemProps) => (done ? 0.7 : 1)};
`;

export const ToDoText = styled.Text<StyledToDoItemProps>`
  font-size: ${theme.typography.body.fontSize}px;
  font-weight: ${theme.typography.body.fontWeight};
  line-height: ${theme.typography.body.lineHeight}px;
  color: ${({ done }: StyledToDoItemProps) =>
    done ? theme.colors.text.secondary : theme.colors.text.primary};
  text-decoration-line: ${({ done }: StyledToDoItemProps) =>
    done ? "line-through" : "none"};
`;

export const ActionsContainer = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
`;

export const ActionButton = styled.TouchableOpacity<StyledActionButtonProps>`
  width: 60px;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ variant }: StyledActionButtonProps) =>
    variant === "edit" ? theme.colors.secondary : theme.colors.error};
`;
