import { Flex, Icon, Typography } from "@app/shared/ui";
import { TouchableContainer } from "./ui";
import type { TouchableProps } from "./types";

export const Touchable = ({ title, icon }: TouchableProps) => {
  return (
    <TouchableContainer>
      <Flex gap={12}>
        <Icon
          color="primary"
          name={icon}
        />
        <Typography
          variant="p"
          color="primary">
          {title}
        </Typography>
      </Flex>
    </TouchableContainer>
  );
};
