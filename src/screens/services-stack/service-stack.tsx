import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootScreen, ServiceScreen, ContentScreen } from "./screens";
import { RouteNames, type Navigator, type RootScreenProps } from "./types";
import type { ServicesStackProps } from "../types";

const NativeStack = createNativeStackNavigator<Navigator>();

export const ServiceStack = ({ navigation }: ServicesStackProps) => {
  return (
    <NativeStack.Navigator initialRouteName={RouteNames.root} screenOptions={{ headerShown: false, animation: "none" }}>
      <NativeStack.Screen
        name={RouteNames.root}
        component={(props: RootScreenProps) => <RootScreen {...props} onOpenDrawer={navigation.openDrawer} />}
      />
      <NativeStack.Screen name={RouteNames.service} component={ServiceScreen} />
      <NativeStack.Screen name={RouteNames.content} component={ContentScreen} />
    </NativeStack.Navigator>
  );
};
