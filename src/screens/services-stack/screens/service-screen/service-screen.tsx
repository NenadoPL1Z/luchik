import { SafeAreaView, Text } from "react-native";
import type { ServiceScreenProps } from "../../types";

export const ServiceScreen = ({ route }: ServiceScreenProps) => {
  return (
    <SafeAreaView>
      <Text>{route.name}</Text>
    </SafeAreaView>
  );
};
