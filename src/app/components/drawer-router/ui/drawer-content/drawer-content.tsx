import { Flex, Touchable, Typography } from "@app/shared/ui";
import { Layout } from "@app/widgets/layout";
import type { DrawerContentProps } from "./types";

export const DrawerContent = (props: DrawerContentProps) => {
  return (
    <Layout>
      <Flex gap={12}>
        <Touchable.Icon
          name="CloseIcon24"
          backgroundColor="third"
          onPress={props.navigation.closeDrawer}
        />
        <Typography
          variant="h1"
          color="white">
          Меню
        </Typography>
      </Flex>
    </Layout>
  );
};
