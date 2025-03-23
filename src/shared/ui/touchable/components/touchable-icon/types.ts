import type { ColorName } from "@app/shared/types";
import type { IconProps } from "@app/shared/ui";

export type TouchableIconProps = Omit<IconProps, "color"> & {
  color?: ColorName;
  onPress?: () => void;
};
