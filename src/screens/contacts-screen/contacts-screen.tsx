import { Image, Linking, TouchableOpacity } from "react-native";
import { Header, Layout, Main } from "@app/widgets";
import { Flex, Typography } from "@app/shared/ui";
import { TextBlock } from "./components";
import { styles } from "./contacts-screen.styles";
import type { ContactsScreenProps } from "../types";

export const ContactsScreen = ({ navigation }: ContactsScreenProps) => {
  return (
    <Layout>
      <Header.Drawer title="Контакты" onPress={navigation.openDrawer} />
      <Main>
        <Image style={styles.map} resizeMode="cover" source={require("./assets/images/map.jpg")} />
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
            <TouchableOpacity onPress={() => Linking.openURL("https://www.socza.ru")}>
              <Typography variant="p" color="main">
                www.socza.ru
              </Typography>
            </TouchableOpacity>
          </TextBlock>
          <Image style={styles.qr} source={require("./assets/images/qr-web.jpg")} />
          <TextBlock icon="ShareIcon24" title="Социальные сети">
            <TouchableOpacity onPress={() => Linking.openURL("https://vk.com/club185287122")}>
              <Typography variant="p" color="main">
                ВКонтакте
              </Typography>
            </TouchableOpacity>
          </TextBlock>
          <Image style={styles.qr} source={require("./assets/images/qr-vk.jpg")} />
        </Flex>
      </Main>
    </Layout>
  );
};
