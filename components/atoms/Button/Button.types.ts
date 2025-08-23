import { TouchableOpacityProps } from "react-native";

export interface ButtonProps extends Omit<TouchableOpacityProps, "style"> {
  title: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "small" | "medium" | "large";
  loading?: boolean;
  disabled?: boolean;
}
