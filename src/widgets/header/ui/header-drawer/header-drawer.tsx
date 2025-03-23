import { Flex, Touchable, Typography } from "@app/shared/ui";
import { OFFSET_MAP } from "@app/shared/constants";
import type { HeaderDrawerProps } from "./types";

export const HeaderDrawer = ({ title, onPress }: HeaderDrawerProps) => {
  return (
    <Flex
      style={{ paddingHorizontal: OFFSET_MAP.HORIZONTAL }}
      gap={12}>
      <Touchable.Icon
        icon="MenuIcon24"
        color="white"
        backgroundColor="primary"
        onPress={onPress}
      />
      <Typography variant="h1">{title}</Typography>
    </Flex>
  );
};
