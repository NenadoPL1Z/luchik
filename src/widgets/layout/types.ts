import type { ViewStyle } from "react-native";
import type { ColorName } from "@app/shared/types";
import type { ReactNode } from "react";

export type LayoutProps = {
  style?: ViewStyle;
  backgroundColor?: ColorName;
  children: ReactNode;
};
