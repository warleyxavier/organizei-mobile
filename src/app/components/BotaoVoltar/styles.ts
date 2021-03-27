import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    backgroundColor: "#27AE60",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 3,
      width: 1
    }
  }
});