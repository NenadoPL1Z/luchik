import { Text } from "react-native";
import { COLORS_MAP } from "@app/shared/types";
import { styles } from "./typography.styles";
import type { TypographyProps } from "./types";

export const Typography = ({ color = "black", variant, style, ...props }: TypographyProps) => {
  return (
    <Text
      {...props}
      style={[style, styles[variant], { color: COLORS_MAP[color] }]}
    />
  );
};
