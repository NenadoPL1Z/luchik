import { Header, Layout, Main } from "@app/widgets";
import { Flex, Typography } from "@app/shared/ui";
import type { ContentScreenProps } from "../../types";

export const ContentScreen = ({ route, navigation }: ContentScreenProps) => {
  const content = route.params;

  return (
    <Layout>
      <Header.Back title="Контент услуги" onPress={navigation.goBack} />
      <Main>
        {content.map(({ title, subtitle, render }) => (
          <Flex key={title} flexDirection="column" gap={8}>
            <Typography variant="h2" style={{ textAlign: "center" }}>
              {title}
            </Typography>
            {subtitle || render?.()}
          </Flex>
        ))}
      </Main>
    </Layout>
  );
};
