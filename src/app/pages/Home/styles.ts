import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#27AE60"
  },
  contaContainer: {
    height: 220,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  descricaoConta: {
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "bold",
    color: "white"
  },
  saldoDisponivelConta: {
    fontFamily: "Roboto",
    fontSize: 40,
    fontWeight: "bold",
    color: "white"
  },
  menu: {
    position: "absolute",
    bottom: 30,
    marginRight: 15
  }
});