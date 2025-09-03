export interface ModalButton {
  text: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "danger";
}

export interface ModalProps {
  visible: boolean;
  title: string;
  text: string;
  buttons: ModalButton[];
  onClose?: () => void;
}
