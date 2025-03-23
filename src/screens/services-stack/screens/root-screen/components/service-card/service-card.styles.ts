import { StyleSheet } from "react-native";
import { COLORS_MAP } from "@app/shared/types";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: COLORS_MAP.white,
    borderRadius: 24,
    paddingVertical: 15,
    paddingLeft: 15,
    height: 145,
    overflow: "hidden",
  },
  text: {
    maxWidth: 180,
  },
  image: {
    width: 156,
    height: 145,
    transform: [{ translateY: -15 }],
  },
});
