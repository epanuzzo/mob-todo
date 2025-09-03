import { TextProps as RNTextProps } from "react-native";

export type TypographyType =
  | "largeTitle"
  | "title1"
  | "title2"
  | "title3"
  | "headline"
  | "body"
  | "subheadline"
  | "footnote"
  | "caption";

export interface TextProps extends Omit<RNTextProps, "style"> {
  type?: TypographyType;
  children: React.ReactNode;
}
