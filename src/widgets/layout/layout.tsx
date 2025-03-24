import { Flex } from "@app/shared/ui";
import { COLORS_MAP } from "@app/shared/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { OFFSET_MAP } from "@app/shared/constants";
import { ImageBackground } from "react-native";
import { styles } from "./layout.styles";
import type { LayoutProps } from "./types";

export const Layout = ({ style = {}, backgroundColor = "secondary", children }: LayoutProps) => {
  const { top, right, left } = useSafeAreaInsets();

  return (
    <ImageBackground
      style={styles.background}
      imageStyle={styles.image}
      source={require("./assets/images/pattern.png")}>
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        flexGrow={1}
        gap={OFFSET_MAP.LAYOUT}
        style={[
          styles.root,
          {
            paddingTop: top || styles.root.paddingTop,
            paddingRight: right,
            paddingLeft: left,
            backgroundColor: COLORS_MAP[backgroundColor],
          },
          style,
        ]}>
        {children}
      </Flex>
    </ImageBackground>
  );
};
