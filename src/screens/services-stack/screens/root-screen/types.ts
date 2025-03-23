import type { RootScreenProps } from "../../types";

export type CustomRootScreenProps = RootScreenProps & {
  onOpenDrawer: () => void;
};
