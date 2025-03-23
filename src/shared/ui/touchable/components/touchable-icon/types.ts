import type { ColorName } from "@app/shared/types";
import type { IconProps, IconName } from "@app/shared/ui";

export type TouchableIconProps = Omit<IconProps, "name" | "color"> & {
  icon: IconName;
  color?: ColorName;
  onPress?: () => void;
};
