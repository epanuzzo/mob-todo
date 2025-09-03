import { TextInputProps } from "react-native";

export interface InputProps extends Omit<TextInputProps, "style"> {
  title?: string;
  error?: boolean;
  errorMessage?: string;
}
