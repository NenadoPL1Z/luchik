import { Flex, Touchable } from "@app/shared/ui";
import { Layout } from "@app/widgets/layout";
import { Header } from "@app/widgets/header";
import { DrawerRouteNames } from "@app/screens";
import type { DrawerContentProps } from "./types";

export const DrawerContent = (props: DrawerContentProps) => {
  return (
    <Layout>
      <Header.Close onPress={props.navigation.closeDrawer} />
      <Flex
        flexDirection="column"
        gap={8}>
        <Touchable
          icon="LightningIcon24"
          title="Миссия и цели компании"
          onPress={() => props.navigation.navigate(DrawerRouteNames.missions)}
        />
        <Touchable
          icon="PeopleIcon24"
          title="Услуги"
          onPress={() => props.navigation.navigate(DrawerRouteNames.services)}
        />
        <Touchable
          icon="LandmarkIcon24"
          title="Контакты"
          onPress={() => props.navigation.navigate(DrawerRouteNames.contacts)}
        />
        <Touchable
          icon="BookIcon24"
          title="О приложении"
          onPress={() => props.navigation.navigate(DrawerRouteNames.about)}
        />
      </Flex>
    </Layout>
  );
};
