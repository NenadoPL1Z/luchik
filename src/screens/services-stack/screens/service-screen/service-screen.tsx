import { Header, Layout, Main } from "@app/widgets";
import type { ServiceScreenProps } from "../../types";

export const ServiceScreen = ({ navigation }: ServiceScreenProps) => {
  return (
    <Layout>
      <Header.Back title="Услуга" onPress={navigation.goBack} />
      <Main>{null}</Main>
    </Layout>
  );
};
