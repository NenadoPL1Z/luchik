import { COLORS_MAP } from "@app/shared/types";
import { View } from "react-native";
import { Fragment } from "react";
import * as Icons from "./assets/dist";
import { styles } from "./icons.styles";
import type { IconProps } from "./types";

export const Icon = ({ name, color, backgroundColor, ...props }: IconProps) => {
  const IconComponent = Icons[name];
  const Root = backgroundColor
    ? { Component: View, style: [styles.background, { backgroundColor: COLORS_MAP[backgroundColor] }] }
    : { Component: Fragment, style: {} };
  return (
    <Root.Component style={Root.style}>
      <IconComponent
        style={styles.root}
        color={COLORS_MAP[color]}
        {...props}
      />
    </Root.Component>
  );
};
