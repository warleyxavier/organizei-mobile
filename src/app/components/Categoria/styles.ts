import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 65,
    borderRadius: 8,
    backgroundColor: "#dee2e6",
    marginTop: 10,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderLeftWidth: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  descricao: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "bold"
  },
  valor: {
    textAlign: "right"
  }
});