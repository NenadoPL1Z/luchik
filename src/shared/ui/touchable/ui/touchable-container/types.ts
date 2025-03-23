import type { ReactNode } from "react";

export type TouchableContainerProps = {
  onPress: () => void;
  children: ReactNode;
};
