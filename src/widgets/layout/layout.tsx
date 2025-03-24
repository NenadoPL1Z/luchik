import { Flex } from "@app/shared/ui";
import { COLORS_MAP } from "@app/shared/types";
import { OFFSET_MAP } from "@app/shared/constants";
import { SafeAreaView } from "react-native";
import { styles } from "./layout.styles";
import type { LayoutProps } from "./types";

export const Layout = ({ style = {}, backgroundColor = "secondary", children }: LayoutProps) => {
  return (
    <SafeAreaView style={[styles.root, { backgroundColor: COLORS_MAP[backgroundColor] }]}>
      {/*<ImageBackground*/}
      {/*  style={styles.background}*/}
      {/*  imageStyle={styles.image}*/}
      {/*  source={require("./assets/images/pattern.png")}*/}
      {/*/>*/}
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
