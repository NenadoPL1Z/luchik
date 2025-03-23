import { TouchableOpacity } from "react-native";
import { styles } from "./touchable-container.styles.ts";
import type { TouchableContainerProps } from "./types";

export const TouchableContainer = ({ onPress, children }: TouchableContainerProps) => {
  return (
    <TouchableOpacity
      style={styles.root}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};
