import { StyleSheet } from "react-native";
import { DRAWER_BORDER_RADIUS } from "../../constants";

export const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
  },
  layout: {
    paddingRight: 0,
    borderTopRightRadius: DRAWER_BORDER_RADIUS,
    borderBottomRightRadius: DRAWER_BORDER_RADIUS,
    overflow: "hidden",
  },
});
