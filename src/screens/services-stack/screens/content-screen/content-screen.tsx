import { SafeAreaView, Text } from "react-native";
import type { ContentScreenProps } from "../../types";

export const ContentScreen = ({ route }: ContentScreenProps) => {
  return (
    <SafeAreaView>
      <Text>{route.name}</Text>
    </SafeAreaView>
  );
};
