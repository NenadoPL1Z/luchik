import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { hide } from "react-native-bootsplash";
import { Screens, RouteNames, type Navigator } from "@app/screens";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DrawerContent } from "./ui";
import { styles } from "./drawer-router.styles";
import { PADDING_VERTICAL_MIN } from "./constants.ts";

const Drawer = createDrawerNavigator<Navigator>();

export const DrawerRouter = () => {
  const { top } = useSafeAreaInsets();
  const paddingVertical = top > PADDING_VERTICAL_MIN ? top : PADDING_VERTICAL_MIN;

  return (
    <NavigationContainer onReady={() => hide({ fade: true })}>
      <Drawer.Navigator
        initialRouteName={RouteNames.services}
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerType: "front",
          drawerStyle: [styles.drawerStyle, { paddingVertical }],
        }}>
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
};
