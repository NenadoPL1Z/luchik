import type { ServiceTree, ServiceTreeContent } from "./service-tree.ts";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export enum RouteNames {
  root = "root",
  service = "service",
  content = "content",
}

export type Navigator = {
  [RouteNames.root]: undefined;
  [RouteNames.service]: ServiceTree;
  [RouteNames.content]: ServiceTreeContent[];
};

export type RootScreenProps = NativeStackScreenProps<Navigator, RouteNames.root>;
export type ServiceScreenProps = NativeStackScreenProps<Navigator, RouteNames.service>;
export type ContentScreenProps = NativeStackScreenProps<Navigator, RouteNames.content>;
