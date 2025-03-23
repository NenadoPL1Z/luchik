import { Header, Layout, Main } from "@app/widgets";
import { Flex, Typography } from "@app/shared/ui";
import { Image } from "react-native";
import { getVersion } from "react-native-device-info";
import type { AboutScreenProps } from "../types";

export const AboutScreen = ({ navigation }: AboutScreenProps) => {
  return (
    <Layout>
      <Header.Drawer
        title="О приложении"
        onPress={() => navigation.openDrawer()}
      />
      <Main>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          style={{ marginBottom: 8 }}
          gap={4}>
          <Image
            width={180}
            height={160}
            source={require("./assets/images/logotype.png")}
          />
          <Typography
            style={{ opacity: 0.4 }}
            variant="p">
            Версия {getVersion()}
          </Typography>
        </Flex>
        <Typography variant="p">
          Мобильное приложение «Лучик добра» разработано для учреждения КУ РА «УСПН Майминского района».{"\n"}
          {"\n"}
          Приложение расскажет пользователям о мерах социальной поддержки для детей-инвалидов и детей с ОВЗ. Являясь
          справочником по социальным услугам, приложение в доступном виде предлагает пользователям информацию о мерах
          социальной поддержки и социальных услугах, доступным детям-инвалидам, детям с ОВЗ и родителям таковых детей,
          которыми можно воспользоваться, обратившись в наше учреждение.
        </Typography>
      </Main>
    </Layout>
  );
};
