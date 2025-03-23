import { TouchableOpacity } from "react-native";
import { styles } from "./touchable-container.styles.ts";
import type { TouchableContainerProps } from "./types";

export const TouchableContainer = ({ children }: TouchableContainerProps) => {
  return <TouchableOpacity style={styles.root}>{children}</TouchableOpacity>;
};
