import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { RouteNames, type RootScreenProps } from "../../types";

export const RootScreen = ({ navigation }: RootScreenProps) => {
  const handlePushService = () => {
    navigation.navigate(RouteNames.service);
  };

  return (
    <SafeAreaView>
      <Text>services-root-screen</Text>
      <TouchableOpacity onPress={handlePushService}>
        <Text>123</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
