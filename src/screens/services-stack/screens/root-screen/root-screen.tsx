import { Header, Layout, Main } from "@app/widgets";
// import { RouteNames } from "../../types";
// import { ServiceCard } from "./components";
import type { CustomRootScreenProps } from "./types";

export const RootScreen = ({ onOpenDrawer }: CustomRootScreenProps) => {
  // const handlePushService = () => {
  //   navigation.navigate(RouteNames.service);
  // };

  return (
    <Layout>
      <Header.Drawer
        title="Услуги"
        onPress={onOpenDrawer}
      />
      <Main withBackground={false}>{null}</Main>
    </Layout>
  );
};
