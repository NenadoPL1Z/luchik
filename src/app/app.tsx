import { SafeAreaView, Text } from "react-native";
import { IS_DEV } from "@app/shared/constants";
import { GeneralProvider } from "./providers";

if (IS_DEV) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("../../reactotron.config.js");
}

export const App = () => {
  return (
    <GeneralProvider>
      <SafeAreaView>
        <Text>123</Text>
      </SafeAreaView>
    </GeneralProvider>
  );
};
