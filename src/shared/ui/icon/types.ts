import type { Colors } from "@app/shared/types";
import type * as Icons from "./assets/dist";
import type { SvgProps } from "react-native-svg";

type IconName = keyof typeof Icons;

export type IconProps = SvgProps & {
  name: IconName;
  color: Colors;
};
