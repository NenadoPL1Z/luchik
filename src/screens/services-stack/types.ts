import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export enum RouteNames {
  root = "root",
  service = "service",
}

export type Navigator = {
  [RouteNames.root]: undefined;
  [RouteNames.service]: undefined;
};

export type RootScreenProps = NativeStackScreenProps<Navigator, RouteNames.root>;
export type ServiceScreenProps = NativeStackScreenProps<Navigator, RouteNames.service>;
