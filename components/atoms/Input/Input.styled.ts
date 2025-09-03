import styled from "styled-components/native";
import { theme } from "../../../constants/theme";

interface StyledTextInputProps {
  hasError: boolean;
}

export const InputContainer = styled.View`
  width: 100%;
`;

export const TitleText = styled.Text`
  font-size: ${theme.typography.footnote.fontSize}px;
  font-weight: ${theme.typography.headline.fontWeight};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xs}px;
`;

export const StyledTextInput = styled.TextInput<StyledTextInputProps>`
  background-color: ${theme.colors.surfaceAlt};
  border-width: 1px;
  border-color: ${({ hasError }: StyledTextInputProps) =>
    hasError ? theme.colors.error : theme.colors.border};
  border-radius: ${theme.borderRadius.md}px;
  padding: ${theme.spacing.md}px;
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.text.primary};
`;

export const ErrorText = styled.Text`
  font-size: ${theme.typography.footnote.fontSize}px;
  color: ${theme.colors.error};
  margin-top: ${theme.spacing.xs}px;
  font-weight: ${theme.typography.body.fontWeight};
`;
