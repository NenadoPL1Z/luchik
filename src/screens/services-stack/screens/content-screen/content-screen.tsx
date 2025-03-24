import { Header, Layout, Main } from "@app/widgets";
import type { ContentScreenProps } from "../../types";

export const ContentScreen = ({ navigation }: ContentScreenProps) => {
  return (
    <Layout>
      <Header.Back title="Контент услуги" onPress={navigation.goBack} />
      <Main>{null}</Main>
    </Layout>
  );
};
