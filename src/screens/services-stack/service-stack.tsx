import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootScreen, ServiceScreen } from "./screens";

const NativeStack = createNativeStackNavigator();

export const ServiceStack = () => {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen
        name="root"
        component={RootScreen}
      />
      <NativeStack.Screen
        name="service"
        component={ServiceScreen}
      />
    </NativeStack.Navigator>
  );
};
