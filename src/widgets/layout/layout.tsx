import { SafeAreaView } from "react-native";
import { Flex } from "@app/shared/ui";
import type { LayoutProps } from "./types";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <SafeAreaView>
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gap={16}>
        {children}
      </Flex>
    </SafeAreaView>
  );
};
