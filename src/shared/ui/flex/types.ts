import type { FlexStyle } from "react-native";
import type { ReactNode } from "react";

type Styles = Pick<
  FlexStyle,
  | "flexDirection"
  | "flexGrow"
  | "flexShrink"
  | "justifyContent"
  | "alignItems"
  | "alignSelf"
  | "gap"
  | "rowGap"
  | "columnGap"
>;

export type FlexProps = Styles & {
  children: ReactNode;
};
