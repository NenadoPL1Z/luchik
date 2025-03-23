import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { hide } from "react-native-bootsplash";
import { Screens, DrawerRouteNames } from "@app/screens";
import { DrawerContent } from "./ui";
import { styles } from "./drawer-router.styles";
import type { DrawerNavigator } from "@app/screens";

const Drawer = createDrawerNavigator<DrawerNavigator>();

export const DrawerRouter = () => {
  return (
    <NavigationContainer onReady={() => hide({ fade: true })}>
      <Drawer.Navigator
        initialRouteName={DrawerRouteNames.services}
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerType: "front",
          drawerStyle: styles.drawerStyle,
        }}>
        <Drawer.Screen
          name={DrawerRouteNames.missions}
          component={Screens.MissionsScreen}
        />
        <Drawer.Screen
          name={DrawerRouteNames.services}
          component={Screens.ServiceStack}
        />
        <Drawer.Screen
          name={DrawerRouteNames.contacts}
          component={Screens.ContactsScreen}
        />
        <Drawer.Screen
          name={DrawerRouteNames.about}
          component={Screens.AboutScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
