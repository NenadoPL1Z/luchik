import { StyleSheet } from "react-native";
import { OFFSET_MAP } from "@app/shared/constants";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scroll: {
    borderRadius: 16,
  },
  contentContainerStyle: {
    paddingBottom: OFFSET_MAP.HORIZONTAL,
  },
});
