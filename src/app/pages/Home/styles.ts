import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#27AE60",
    paddingTop: 75,
    paddingHorizontal: 15,
    flex: 1
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
    marginVertical: 20,
    display: "flex",
    minHeight: 105
  },
  tiles: {
    backgroundColor: "red"
  }
});