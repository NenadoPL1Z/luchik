import { Flex } from "@app/shared/ui";
import { COLORS_MAP } from "@app/shared/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./layout.styles";
import type { LayoutProps } from "./types";

export const Layout = ({ style = {}, backgroundColor = "third", children }: LayoutProps) => {
  const { top } = useSafeAreaInsets();
  return (
    <Flex
      flexDirection="column"
      alignItems="flex-start"
      flexGrow={1}
      gap={16}
      style={[
        styles.root,
        {
          paddingTop: top || styles.root.paddingVertical,
          backgroundColor: COLORS_MAP[backgroundColor],
        },
        style,
      ]}>
      {children}
    </Flex>
  );
};
