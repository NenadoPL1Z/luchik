import { Header, Layout, Main } from "@app/widgets";
import { Flex, Touchable } from "@app/shared/ui";
import { RouteNames } from "../../types";
import type { ServiceScreenProps, ServiceTreeContent } from "../../types";

export const ServiceScreen = ({ route, navigation }: ServiceScreenProps) => {
  const service = route.params;

  const handlePushToContent = (content: ServiceTreeContent[]) => {
    navigation.navigate(RouteNames.content, content);
  };

  return (
    <Layout>
      <Header.Back title={service.title} onPress={navigation.goBack} />
      <Main withBackground={false} withPadding={false}>
        <Flex flexDirection="column" gap={8}>
          {service.children!.map((item) => (
            <Touchable.Push key={item.title} title={item.title} onPress={() => handlePushToContent(item.content)} />
          ))}
        </Flex>
      </Main>
    </Layout>
  );
};
