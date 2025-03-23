import { Flex, Touchable, Typography } from "@app/shared/ui";
import { OFFSET_MAP } from "@app/shared/constants";
import type { HeaderCloseProps } from "./types";

export const HeaderClose = ({ onPress }: HeaderCloseProps) => {
  return (
    <Flex
      style={{ paddingHorizontal: OFFSET_MAP.HORIZONTAL }}
      gap={12}>
      <Touchable.Icon
        icon="CloseIcon24"
        backgroundColor="third"
        onPress={onPress}
      />
      <Typography
        variant="h1"
        color="white">
        Меню
      </Typography>
    </Flex>
  );
};
