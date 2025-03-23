import { Icon } from "@app/shared/ui";
import { TouchableOpacity } from "react-native";
import type { TouchableIconProps } from "./types";

export const TouchableIcon = ({ onPress, icon, color = "primary", ...svgProps }: TouchableIconProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon
        name={icon}
        color={color}
        {...svgProps}
      />
    </TouchableOpacity>
  );
};
