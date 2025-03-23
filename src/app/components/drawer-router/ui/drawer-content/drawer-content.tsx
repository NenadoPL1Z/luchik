import { Flex, Touchable, Typography } from "@app/shared/ui";
import { Layout } from "@app/widgets/layout";
import type { DrawerContentProps } from "./types";

export const DrawerContent = (props: DrawerContentProps) => {
  return (
    <Layout>
      <Flex
        gap={12}
        marginBottom={16}>
        <Touchable.Icon
          icon="CloseIcon24"
          backgroundColor="third"
          onPress={props.navigation.closeDrawer}
        />
        <Typography
          variant="h1"
          color="white">
          Меню
        </Typography>
      </Flex>
      <Flex
        flexDirection="column"
        gap={8}>
        <Touchable
          icon="LightningIcon24"
          title="Миссия и цели компании"
        />
        <Touchable
          icon="PeopleIcon24"
          title="Услуги"
        />
        <Touchable
          icon="LandmarkIcon24"
          title="Контакты"
        />
        <Touchable
          icon="BookIcon24"
          title="О приложении"
        />
      </Flex>
    </Layout>
  );
};
