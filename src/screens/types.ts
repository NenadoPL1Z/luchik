import type { DrawerScreenProps } from "@react-navigation/drawer";

export enum DrawerRouteNames {
  missions = "missions",
  services = "services",
  contacts = "contacts",
  about = "about",
}

export type DrawerNavigator = {
  [DrawerRouteNames.missions]: undefined;
  [DrawerRouteNames.services]: undefined;
  [DrawerRouteNames.contacts]: undefined;
  [DrawerRouteNames.about]: undefined;
};

export type MissionsScreenProps = DrawerScreenProps<DrawerNavigator, DrawerRouteNames.missions>;
export type ServicesStackProps = DrawerScreenProps<DrawerNavigator, DrawerRouteNames.services>;
export type ContactsScreenProps = DrawerScreenProps<DrawerNavigator, DrawerRouteNames.contacts>;
export type AboutScreenProps = DrawerScreenProps<DrawerNavigator, DrawerRouteNames.about>;
