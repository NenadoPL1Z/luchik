import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { hide } from "react-native-bootsplash";
import { Screens } from "@app/screens/screens";

const Drawer = createDrawerNavigator();

export const DrawerRouter = () => (
  <NavigationContainer onReady={() => hide({ fade: true })}>
    <Drawer.Navigator initialRouteName="services">
      <Drawer.Screen
        name="mission"
        component={Screens.MissionsScreen}
      />
      <Drawer.Screen
        name="services"
        component={Screens.ServiceStack}
      />
      <Drawer.Screen
        name="contacts"
        component={Screens.ContactsScreen}
      />
      <Drawer.Screen
        name="about"
        component={Screens.AboutScreen}
      />
    </Drawer.Navigator>
  </NavigationContainer>
);
