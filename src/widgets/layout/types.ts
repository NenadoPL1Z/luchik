import type { ViewStyle } from "react-native";
import type { ColorName } from "@app/shared/types";
import type { ReactNode } from "react";

export const PATTERNS = {
  main: require("./assets/images/pattern-main.png"),
  secondary: require("./assets/images/pattern-secondary.png"),
} as const;

export type LayoutProps = {
  style?: ViewStyle;
  backgroundColor?: ColorName;
  children: ReactNode;
  pattern?: keyof typeof PATTERNS;
};
