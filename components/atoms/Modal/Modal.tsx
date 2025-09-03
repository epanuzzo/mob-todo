import React from "react";
import { Modal as RNModal } from "react-native";
import { ModalProps } from "./Modal.types";
import {
  ModalOverlay,
  ModalContainer,
  ModalTitle,
  ModalText,
  ModalButtonsContainer,
  ModalButton,
  ModalButtonText,
} from "./Modal.styled";

/**
 * Modal component with configurable title, text, and buttons
 */
export const Modal: React.FC<ModalProps> = ({
  visible,
  title,
  text,
  buttons,
  onClose,
}) => {
  return (
    <RNModal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <ModalOverlay>
        <ModalContainer>
          <ModalTitle>{title}</ModalTitle>
          <ModalText>{text}</ModalText>
          <ModalButtonsContainer>
            {buttons.map((button, index) => (
              <ModalButton
                key={index}
                variant={button.variant || "secondary"}
                onPress={button.onPress}
              >
                <ModalButtonText variant={button.variant || "secondary"}>
                  {button.text}
                </ModalButtonText>
              </ModalButton>
            ))}
          </ModalButtonsContainer>
        </ModalContainer>
      </ModalOverlay>
    </RNModal>
  );
};
