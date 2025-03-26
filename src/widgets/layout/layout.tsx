import { Flex } from "@app/shared/ui";
import { COLORS_MAP } from "@app/shared/types";
import { OFFSET_MAP } from "@app/shared/constants";
import { ImageBackground, SafeAreaView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./layout.styles";
import { type LayoutProps } from "./types";
import { PATTERNS } from "./types.ts";

export const Layout = ({ style = {}, backgroundColor = "secondary", children }: LayoutProps) => {
  const { left } = useSafeAreaInsets();
  return (
    <SafeAreaView style={[styles.root, { backgroundColor: COLORS_MAP[backgroundColor] }]}>
      <View style={[styles.view, { backgroundColor: COLORS_MAP[`background_${backgroundColor}`] }, { left }]} />
      <ImageBackground style={[styles.background, { left }]} source={PATTERNS[backgroundColor]} />
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        flexGrow={1}
        gap={OFFSET_MAP.LAYOUT}
        style={[styles.layout, style]}>
        {children}
      </Flex>
    </SafeAreaView>
  );
};
