import { StyleSheet } from "react-native";
import { COLORS_MAP } from "@app/shared/types";

export const styles = StyleSheet.create({
  table: {
    width: "100%",
    borderRadius: 16,
    overflow: "hidden",

    borderStyle: "solid",
    borderWidth: 1,
    borderColor: COLORS_MAP.secondary,
  },
  row: {
    width: "100%",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: COLORS_MAP.secondary,
  },
  resetBorder: {
    borderBottomWidth: 0,
  },
  column: {
    width: "50%",
  },
  columnFirst: {
    borderStyle: "solid",
    borderRightWidth: 1,
    borderRightColor: COLORS_MAP.secondary,
  },
  text: {
    paddingVertical: 4,
    paddingHorizontal: 2,
    textAlign: "center",
  },
  header: {
    backgroundColor: COLORS_MAP.main,
  },
  rowOdd: {
    backgroundColor: COLORS_MAP.white,
  },
  rowEven: {
    backgroundColor: COLORS_MAP.third,
  },
});
