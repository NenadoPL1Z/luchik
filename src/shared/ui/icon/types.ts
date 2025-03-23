import type { ColorName } from "@app/shared/types";
import type * as Icons from "./assets/dist";

export type IconName = keyof typeof Icons;

export type IconProps = {
  name: IconName;
  color: ColorName;
  backgroundColor?: ColorName;
};
