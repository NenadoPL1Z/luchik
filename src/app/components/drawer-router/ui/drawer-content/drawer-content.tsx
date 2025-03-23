import { Flex, Touchable } from "@app/shared/ui";
import { DrawerRouteNames } from "@app/screens";
import { Layout, Header, Main } from "@app/widgets";
import { styles } from "./drawer-content.styles";
import type { DrawerContentProps } from "./types";

export const DrawerContent = ({ navigation }: DrawerContentProps) => {
  return (
    <Layout
      style={styles.root}
      backgroundColor="main">
      <Header.Close onPress={navigation.closeDrawer} />
      <Main
        withBackground={false}
        withPadding={false}>
        <Flex
          flexDirection="column"
          gap={8}>
          <Touchable
            icon="LightningIcon24"
            title="Миссия и цели компании"
            onPress={() => navigation.navigate(DrawerRouteNames.missions)}
          />
          <Touchable
            icon="PeopleIcon24"
            title="Услуги"
            onPress={() => navigation.navigate(DrawerRouteNames.services)}
          />
          <Touchable
            icon="LandmarkIcon24"
            title="Контакты"
            onPress={() => navigation.navigate(DrawerRouteNames.contacts)}
          />
          <Touchable
            icon="BookIcon24"
            title="О приложении"
            onPress={() => navigation.navigate(DrawerRouteNames.about)}
          />
        </Flex>
      </Main>
    </Layout>
  );
};
