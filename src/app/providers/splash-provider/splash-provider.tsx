import { StatusBar } from "react-native";
import { COLORS_MAP } from "@app/shared/types";
import { useEffect } from "react";
import { hide } from "react-native-bootsplash";
import type { SplashProviderProps } from "./types";

export const SplashProvider = ({ children }: SplashProviderProps) => {
  useEffect(() => {
    hide({ fade: true });
  }, []);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS_MAP.third}
      />
      {children}
    </>
  );
};
