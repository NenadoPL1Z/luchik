import type { FlexStyle, ViewStyle } from "react-native";
import type { ReactNode } from "react";

type Styles = Pick<FlexStyle, "flexDirection" | "flexGrow" | "justifyContent" | "alignItems" | "gap">;

export type FlexProps = Styles & {
  style?: ViewStyle | ViewStyle[];
  children: ReactNode;
};
