import { Flex, Touchable, Typography } from "@app/shared/ui";
import { OFFSET_MAP } from "@app/shared/constants";
import type { HeaderBackProps } from "./types";

export const HeaderBack = ({ title, onPress }: HeaderBackProps) => {
  return (
    <Flex alignItems="flex-start" style={{ paddingHorizontal: OFFSET_MAP.HORIZONTAL }} gap={12}>
      <Touchable.Icon icon="ArrowBackIcon24" color="white" backgroundColor="primary" onPress={onPress} />
      <Typography variant="h1">{title}</Typography>
    </Flex>
  );
};
