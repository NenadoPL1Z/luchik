import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { hide } from "react-native-bootsplash";
import { Screens, RouteNames, type Navigator } from "@app/screens";
import { DrawerContent } from "./ui";

const Drawer = createDrawerNavigator<Navigator>();

export const DrawerRouter = () => (
  <NavigationContainer onReady={() => hide({ fade: true })}>
    <Drawer.Navigator
      initialRouteName={RouteNames.services}
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name={RouteNames.missions}
        component={Screens.MissionsScreen}
      />
      <Drawer.Screen
        name={RouteNames.services}
        component={Screens.ServiceStack}
      />
      <Drawer.Screen
        name={RouteNames.contacts}
        component={Screens.ContactsScreen}
      />
      <Drawer.Screen
        name={RouteNames.about}
        component={Screens.AboutScreen}
      />
    </Drawer.Navigator>
  </NavigationContainer>
);
