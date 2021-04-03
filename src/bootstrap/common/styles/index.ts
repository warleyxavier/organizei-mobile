import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: "#27AE60",
    alignItems: "center",
    paddingTop: 170
  },
  botaoVoltar: {
    position: "absolute",
    zIndex: 9,
    alignItems: "center",
    justifyContent: "center",
    left: 40,
    top: 90
  },
  titulo: {
    fontFamily: "Roboto",
    fontSize: 26,
    color: "white",
    paddingHorizontal: 30,
    textAlign: "center",
    marginBottom: 10
  },
  botao: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 75,
    borderRadius: 8,
    backgroundColor: "#0D0D0D",
    marginTop: 50
  },
  textoBotao: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  }
});