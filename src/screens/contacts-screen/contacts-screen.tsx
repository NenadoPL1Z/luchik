import { Image, Linking } from "react-native";
import { Header, Layout, Main } from "@app/widgets";
import { Flex, Typography } from "@app/shared/ui";
import { TextBlock } from "./components";
import type { ContactsScreenProps } from "../types";

export const ContactsScreen = ({ navigation }: ContactsScreenProps) => {
  return (
    <Layout>
      <Header.Drawer title="Контакты" onPress={navigation.openDrawer} />
      <Main>
        <Image width={315} height={212} style={{ marginBottom: 16 }} source={require("./assets/images/map.jpg")} />
        <Flex alignItems="flex-start" flexDirection="column" gap={8}>
          {null}
          <TextBlock icon="LandmarkIcon24" title="Адрес">
            649100, Республика Алтай,{"\n"}Майминский район, село Майма,{"\n"}улица Ленина, 8А
          </TextBlock>
          <TextBlock icon="CallIcon24" title="Телефон">
            <Typography variant="p" onPress={() => Linking.openURL("tel:83882220506")}>
              +7(38822)2-05-06
            </Typography>
            {"\n"}
            <Typography variant="p" onPress={() => Linking.openURL("tel:89039192809")}>
              +79039192809
            </Typography>
            {"\n"}
            <Typography variant="p" onPress={() => Linking.openURL("tel:83884423402")}>
              +7(38844)23-4-02
            </Typography>
          </TextBlock>
          <TextBlock icon="WorldIcon24" title="Вебсайт">
            <Typography variant="p" color="main" onPress={() => Linking.openURL("https://www.socza.ru")}>
              www.socza.ru
            </Typography>
          </TextBlock>
          <Image width={124} height={124} source={require("./assets/images/qr-web.jpg")} />
          <TextBlock icon="ShareIcon24" title="Социальные сети">
            <Typography variant="p" color="main" onPress={() => Linking.openURL("https://vk.com/club185287122")}>
              ВКонтакте
            </Typography>
          </TextBlock>
          <Image width={124} height={124} source={require("./assets/images/qr-vk.jpg")} />
        </Flex>
      </Main>
    </Layout>
  );
};
