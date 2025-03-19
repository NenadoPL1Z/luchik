import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import type { GeneralProviderProps } from "./types";

export const GeneralProvider = ({ children }: GeneralProviderProps) => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>{children}</GestureHandlerRootView>
    </SafeAreaProvider>
  );
};
