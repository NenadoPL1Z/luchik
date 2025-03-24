import { Header, Layout, Main } from "@app/widgets";
import { Flex, Touchable } from "@app/shared/ui";
import { RouteNames } from "../../types";
import type { ServiceScreenProps, ServiceTreeChildren } from "../../types";

export const ServiceScreen = ({ route, navigation }: ServiceScreenProps) => {
  const service = route.params;

  const handlePushToContent = ({ title, content }: ServiceTreeChildren) => {
    navigation.navigate(RouteNames.content, { title, content });
  };

  return (
    <Layout>
      <Header.Back title={service.title} onPress={navigation.goBack} />
      <Main withBackground={false} withPadding={false}>
        <Flex flexDirection="column" gap={8}>
          {service.children!.map((item) => (
            <Touchable.Push key={item.title} title={item.title} onPress={() => handlePushToContent(item)} />
          ))}
        </Flex>
      </Main>
    </Layout>
  );
};
