import { ScrollView, View } from "react-native";
import { OFFSET_MAP } from "@app/shared/constants";
import { COLORS_MAP } from "@app/shared/types";
import { styles } from "./main.styles.ts";
import type { MainProps } from "./types";

export const Main = ({ withBackground = true, withPadding = true, children }: MainProps) => {
  const paddingKey = withPadding ? "padding" : "paddingHorizontal";
  return (
    <View style={[styles.root, { width: "100%", marginBottom: withPadding ? OFFSET_MAP.LAYOUT : undefined }]}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        style={[
          styles.scroll,
          {
            [paddingKey]: OFFSET_MAP.HORIZONTAL,
            marginHorizontal: withPadding ? OFFSET_MAP.HORIZONTAL : undefined,
            backgroundColor: withBackground ? COLORS_MAP.white : undefined,
          },
        ]}>
        {children}
      </ScrollView>
    </View>
  );
};
