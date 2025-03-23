import { ScrollView } from "react-native";
import { PADDING_MAP } from "@app/shared/constants";
import { COLORS_MAP } from "@app/shared/types";
import { styles } from "./main.styles.ts";
import type { MainProps } from "./types";

export const Main = ({ withBackground = true, children }: MainProps) => {
  return (
    <ScrollView
      style={[
        styles.root,
        {
          paddingHorizontal: PADDING_MAP.HORIZONTAL,
          backgroundColor: withBackground ? COLORS_MAP.white : undefined,
        },
      ]}>
      {children}
    </ScrollView>
  );
};
