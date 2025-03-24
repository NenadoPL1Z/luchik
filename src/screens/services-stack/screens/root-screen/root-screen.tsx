import { Header, Layout, Main } from "@app/widgets";
import { Flex } from "@app/shared/ui";
import { ServiceCard } from "./components";
import { SERVICES_TREE } from "../../constants";
import { RouteNames } from "../../types";
import type { ServiceTree } from "../../types";
import type { CustomRootScreenProps } from "./types";

export const RootScreen = ({ onOpenDrawer, navigation }: CustomRootScreenProps) => {
  const handlePush = (service: ServiceTree) => {
    if (service.content) return navigation.navigate(RouteNames.content);
    navigation.navigate(RouteNames.service);
  };

  return (
    <Layout>
      <Header.Drawer title="Услуги" onPress={onOpenDrawer} />
      <Main withBackground={false} withPadding={false}>
        <Flex flexDirection="column" gap={8}>
          {SERVICES_TREE.map((service) => (
            <ServiceCard key={service.title} {...service} onPush={handlePush} />
          ))}
        </Flex>
      </Main>
    </Layout>
  );
};
