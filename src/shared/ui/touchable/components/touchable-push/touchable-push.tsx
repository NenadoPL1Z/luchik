import { TouchableContainer } from "@app/shared/ui/touchable/ui";
import { Flex, Icon, Typography } from "@app/shared/ui";
import type { TouchablePushProps } from "./types";

export const TouchablePush = ({ title, onPress }: TouchablePushProps) => {
  return (
    <TouchableContainer onPress={onPress}>
      <Flex gap={12} justifyContent="space-between">
        <Typography variant="p" color="primary">
          {title}
        </Typography>
        <Icon color="primary" name="RightChevronIcon24" />
      </Flex>
    </TouchableContainer>
  );
};
