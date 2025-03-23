import { ScrollView, View } from "react-native";
import { PADDING_MAP } from "@app/shared/constants";
import { COLORS_MAP } from "@app/shared/types";
import { styles } from "./main.styles.ts";
import type { MainProps } from "./types";

export const Main = ({ withBackground = true, withPadding = true, children }: MainProps) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={[
        styles.root,
        {
          width: withPadding ? undefined : "100%",
          paddingHorizontal: withPadding ? undefined : PADDING_MAP.HORIZONTAL,
          marginHorizontal: withPadding ? PADDING_MAP.HORIZONTAL : undefined,
          backgroundColor: withBackground ? COLORS_MAP.white : undefined,
        },
      ]}>
      <View style={{ padding: withPadding ? PADDING_MAP.HORIZONTAL : undefined }}>{children}</View>
    </ScrollView>
  );
};
