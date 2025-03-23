import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export enum RouteNames {
  root = "root",
  service = "service",
  content = "content",
}

export type Navigator = {
  [RouteNames.root]: undefined;
  [RouteNames.service]: undefined;
  [RouteNames.content]: undefined;
};

export type RootScreenProps = NativeStackScreenProps<Navigator, RouteNames.root>;
export type ServiceScreenProps = NativeStackScreenProps<Navigator, RouteNames.service>;
export type ContentScreenProps = NativeStackScreenProps<Navigator, RouteNames.content>;
