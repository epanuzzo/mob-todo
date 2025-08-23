import React from "react";
import { ButtonProps } from "./Button.types";
import { StyledButton, ButtonText } from "./Button.styled";

/**
 * Button component following atomic design principles
 */
export const Button: React.FC<ButtonProps> = ({
  title,
  variant = "primary",
  size = "medium",
  loading = false,
  disabled = false,
  ...props
}) => {
  const isDisabled = disabled || loading;

  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={isDisabled}
      activeOpacity={0.7}
      {...props}
    >
      <ButtonText variant={variant} size={size} disabled={isDisabled}>
        {loading ? "Loading..." : title}
      </ButtonText>
    </StyledButton>
  );
};
