import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
  },
  layout: {
    flexGrow: 1,
    paddingTop: 10,
  },
  background: {
    flexGrow: 1,
    position: "absolute",
    top: -300,
    left: 0,
    zIndex: 0,
    width: "100%",
    height: Dimensions.get("window").height * 1.7,
  },
});
