import { Header, Layout, Main } from "@app/widgets";
import { Flex, Typography } from "@app/shared/ui";
import type { ContentScreenProps } from "../../types";

export const ContentScreen = ({ route, navigation }: ContentScreenProps) => {
  const service = route.params;

  return (
    <Layout>
      <Header.Back title={service.title} onPress={navigation.goBack} />
      <Main>
        <Flex flexDirection="column" gap={8}>
          {service.content.map(({ title, render }) => (
            <Flex style={{ width: "100%" }} key={title} flexDirection="column" gap={8}>
              <Typography variant="h2" style={{ textAlign: "center" }}>
                {title}
              </Typography>
              {render()}
            </Flex>
          ))}
        </Flex>
      </Main>
    </Layout>
  );
};
