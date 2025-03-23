import { Flex, Icon, Typography } from "@app/shared/ui";
import type { TextBlockProps } from "./types";

export const TextBlock = ({ icon, title, children }: TextBlockProps) => {
  return (
    <Flex
      alignItems="flex-start"
      gap={12}>
      <Icon
        name={icon}
        color="white"
        backgroundColor="main"
      />
      <Flex
        flexDirection="column"
        alignItems="flex-start">
        <Typography variant="h3">{title}</Typography>
        <Typography variant="p">{children}</Typography>
      </Flex>
    </Flex>
  );
};
