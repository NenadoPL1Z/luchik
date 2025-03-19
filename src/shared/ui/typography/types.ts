import type { TextProps } from "react-native";

export type Variant = "h1" | "h2" | "p";

export type TypographyProps = TextProps & {
  variant: Variant;
};
