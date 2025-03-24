import { ScrollView, View } from "react-native";
import { OFFSET_MAP } from "@app/shared/constants";
import { COLORS_MAP } from "@app/shared/types";
import { styles } from "./main.styles.ts";
import type { MainProps } from "./types";

export const Main = ({ withBackground = true, withPadding = true, children }: MainProps) => {
  return (
    <View style={[styles.root, { width: "100%", marginBottom: withPadding ? OFFSET_MAP.LAYOUT : undefined }]}>
      <ScrollView
        indicatorStyle="black"
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ padding: OFFSET_MAP.HORIZONTAL, paddingTop: 0 }}
        style={[
          styles.scroll,
          {
            marginHorizontal: withPadding ? OFFSET_MAP.HORIZONTAL : undefined,
            backgroundColor: withBackground ? COLORS_MAP.white : undefined,
          },
        ]}>
        {children}
      </ScrollView>
    </View>
  );
};
