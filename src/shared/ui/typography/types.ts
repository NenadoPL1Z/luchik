import type { ColorName } from "@app/shared/types";
import type { TextProps } from "react-native";

export type Variant = "h1" | "h2" | "h3" | "p";

export type TypographyProps = TextProps & {
  color?: ColorName;
  variant: Variant;
};
