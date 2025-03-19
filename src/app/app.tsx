import { SafeAreaView } from "react-native";
import { IS_DEV } from "@app/shared/constants";
import { GeneralProvider, SplashProvider } from "./providers";
import "./inits";

if (IS_DEV) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("../../reactotron.config.js");
}

export const App = () => {
  return (
    <GeneralProvider>
      <SplashProvider>
        <SafeAreaView>{null}</SafeAreaView>
      </SplashProvider>
    </GeneralProvider>
  );
};
