import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 4,
    width: "100%",
    height: 100,
    bottom: 0,
     alignItems: "center",
    justifyContent: "center"
  },
  botao: {
    width: "85%",
    height: 55,
    borderRadius: 45,
    backgroundColor: "transparent", 
    alignItems: "center",
    justifyContent: "center"
  },
  botaoHabilitado: {
    backgroundColor: "#27AE60",
  },
  botaoDesabilitado: {
    backgroundColor: "transparent", 
    borderWidth: 2, 
    borderBottomColor: "black"
  },
  textoBotao: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  },
  textoDesabilitado: {
    color: "black"
  }
})