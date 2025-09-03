import React from "react";
import { InputProps } from "./Input.types";
import {
  InputContainer,
  TitleText,
  StyledTextInput,
  ErrorText,
} from "./Input.styled";
import { theme } from "../../../constants/theme";

/**
 * Input component following atomic design principles
 */
export const Input: React.FC<InputProps> = ({
  title,
  error = false,
  errorMessage,
  ...props
}) => {
  return (
    <InputContainer>
      {title && <TitleText>{title}</TitleText>}
      <StyledTextInput
        hasError={error}
        placeholderTextColor={theme.colors.text.tertiary}
        {...props}
      />
      {error && errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </InputContainer>
  );
};
