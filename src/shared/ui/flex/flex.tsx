import { View } from "react-native";
import type { FlexProps } from "./types";

export const Flex = ({
  style,
  fullWidth = true,
  flexDirection = "row",
  alignItems = "center",
  children,
  ...flexStyle
}: FlexProps) => {
  const width = fullWidth ? "100%" : undefined;
  return <View style={[{ width, flexDirection, alignItems }, flexStyle, style]}>{children}</View>;
};
