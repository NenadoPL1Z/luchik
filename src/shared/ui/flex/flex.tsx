import { View } from "react-native";
import type { FlexProps } from "./types";

export const Flex = ({ style, flexDirection = "row", alignItems = "center", children, ...flexStyle }: FlexProps) => {
  return <View style={[{ flexDirection, alignItems }, flexStyle, style]}>{children}</View>;
};
