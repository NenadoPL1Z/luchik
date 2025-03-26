import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
  },
  background: {
    position: "absolute",
    top: -300,
    zIndex: 0,

    width: "100%",
    height: Dimensions.get("window").height * 1.7,
    flexGrow: 1,
  },
  view: {
    position: "absolute",
    top: 0,
    zIndex: 1,

    width: "100%",
    height: Dimensions.get("window").height,
    flexGrow: 1,
  },
  layout: {
    flexGrow: 1,
    paddingTop: 10,
    zIndex: 2,
  },
});
