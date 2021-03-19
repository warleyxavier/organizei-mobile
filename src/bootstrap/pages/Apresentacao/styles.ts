import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "space-around",
    backgroundColor: "#F2F2F2"
  },
  titulo: {
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "bold",
    color: "black"
  },
  descricao: {
    fontFamily: "Roboto",
    fontSize: 22,
    color: "black",
    marginRight: 25
  },
  containerBotoes: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  botao: {
    width: "45%",
    height: 75,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  botaoMeCadastrar: {
    backgroundColor: "#27AE60",    
  },
  botaoEntrar: {
    borderWidth: 1,
    borderColor: "black"
  },
  textoBotao: {
    fontFamily: "Roboto",
    fontSize: 17,
    fontWeight: "bold"   
  }
});