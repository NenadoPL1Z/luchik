import { Text } from "react-native";
import { styles } from "./typography.styles";
import type { TypographyProps } from "./types";

export const Typography = ({ style, variant, ...props }: TypographyProps) => {
  return (
    <Text
      {...props}
      style={[style, styles[variant]]}
    />
  );
};
