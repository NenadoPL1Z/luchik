import { COLORS_MAP } from "@app/shared/types";
import * as Icons from "./assets/dist";
import type { IconProps } from "./types";

export const Icon = ({ name, color, ...props }: IconProps) => {
  const IconComponent = Icons[name];
  return (
    <IconComponent
      color={COLORS_MAP[color]}
      {...props}
    />
  );
};
