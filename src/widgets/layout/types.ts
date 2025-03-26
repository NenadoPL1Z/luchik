import type { ViewStyle } from "react-native";
import type { ReactNode } from "react";

export const PATTERNS = {
  secondary: require("./assets/images/pattern-main.png"),
  main: require("./assets/images/pattern.png"),
} as const;

export type LayoutProps = {
  style?: ViewStyle;
  backgroundColor?: "main" | "secondary";
  children: ReactNode;
};
