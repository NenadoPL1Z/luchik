import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootScreen, ServiceScreen } from "./screens";
import { RouteNames, type Navigator, type RootScreenProps } from "./types";
import type { ServicesStackProps } from "../types";

const NativeStack = createNativeStackNavigator<Navigator>();

export const ServiceStack = ({ navigation }: ServicesStackProps) => {
  return (
    <NativeStack.Navigator
      initialRouteName={RouteNames.root}
      screenOptions={{ headerShown: false }}>
      <NativeStack.Screen
        name={RouteNames.root}
        component={(props: RootScreenProps) => (
          <RootScreen
            {...props}
            onOpenDrawer={navigation.openDrawer}
          />
        )}
      />
      <NativeStack.Screen
        name={RouteNames.service}
        component={ServiceScreen}
      />
    </NativeStack.Navigator>
  );
};
