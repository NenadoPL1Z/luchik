export enum RouteNames {
  missions = "missions",
  services = "services",
  contacts = "contacts",
  about = "about",
}

export type Navigator = {
  [RouteNames.missions]: undefined;
  [RouteNames.services]: undefined;
  [RouteNames.contacts]: undefined;
  [RouteNames.about]: undefined;
};
