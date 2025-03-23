import { StatusBar } from "react-native";
import { COLORS_MAP } from "@app/shared/types";
import { IS_DEV } from "@app/shared/constants";
import { GeneralProvider } from "./providers";
import { DrawerRouter } from "./components";
import "./inits";

if (IS_DEV) require("../../reactotron.config.js");

export const App = () => {
  return (
    <GeneralProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS_MAP.third}
      />
      <DrawerRouter />
    </GeneralProvider>
  );
};
