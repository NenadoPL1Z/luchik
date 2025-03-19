import { SafeAreaView } from "react-native";
import type { LayoutProps } from "./types";

export const Layout = ({ children }: LayoutProps) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};
