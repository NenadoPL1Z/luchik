import { Icon } from "@app/shared/ui";
import { TouchableOpacity } from "react-native";
import type { TouchableIconProps } from "./types";

export const TouchableIcon = ({ onPress, color = "primary", ...svgProps }: TouchableIconProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon
        color={color}
        {...svgProps}
      />
    </TouchableOpacity>
  );
};
