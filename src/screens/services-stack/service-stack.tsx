import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootScreen, ServiceScreen } from "./screens";
import { RouteNames, type Navigator } from "./types";

const NativeStack = createNativeStackNavigator<Navigator>();

export const ServiceStack = () => {
  return (
    <NativeStack.Navigator initialRouteName={RouteNames.root}>
      <NativeStack.Screen
        name={RouteNames.root}
        component={RootScreen}
      />
      <NativeStack.Screen
        name={RouteNames.service}
        component={ServiceScreen}
      />
    </NativeStack.Navigator>
  );
};
