import { Header, Layout, Main } from "@app/widgets";
import { Flex } from "@app/shared/ui";
import { ServiceCard } from "./components";
import { SERVICES_TREE } from "../../constants";
import type { CustomRootScreenProps } from "./types";

export const RootScreen = ({ onOpenDrawer }: CustomRootScreenProps) => {
  return (
    <Layout>
      <Header.Drawer title="Услуги" onPress={onOpenDrawer} />
      <Main withBackground={false} withPadding={false}>
        <Flex gap={8}>
          {SERVICES_TREE.map(({ title, image, list }) => (
            <ServiceCard key={title} title={title} image={image} list={list} />
          ))}
        </Flex>
      </Main>
    </Layout>
  );
};
