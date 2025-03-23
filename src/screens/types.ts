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
