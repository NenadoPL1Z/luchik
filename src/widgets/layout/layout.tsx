import { Flex } from "@app/shared/ui";
import { COLORS_MAP } from "@app/shared/types";
import { OFFSET_MAP } from "@app/shared/constants";
import { ImageBackground, SafeAreaView } from "react-native";
import { styles } from "./layout.styles";
import { PATTERNS, type LayoutProps } from "./types";

export const Layout = ({ style = {}, backgroundColor = "secondary", pattern = "main", children }: LayoutProps) => {
  return (
    <SafeAreaView style={[styles.root, { backgroundColor: COLORS_MAP[backgroundColor] }]}>
      <ImageBackground style={styles.background} source={PATTERNS[pattern]} />
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
