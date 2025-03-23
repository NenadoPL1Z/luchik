import { Flex, Touchable, Typography } from "@app/shared/ui";
import type { HeaderCloseProps } from "./types";

export const HeaderClose = ({ onPress }: HeaderCloseProps) => {
  return (
    <Flex gap={12}>
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
