import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "black",
    borderBottomColor: "black",
    borderBottomWidth: 3,
  },
  filterBox: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
  },
  button: {
    width: 1/3 * 100 + "%",
    height: '75%',
    alignItems: "center",
    justifyContent: "center",
  },
});
