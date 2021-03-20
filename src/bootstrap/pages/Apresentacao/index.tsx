import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

export default function Apresentacao() {
  const navigation = useNavigation();
  
  return (
    <View  style={styles.container}>
      <Text style={styles.titulo}>Organizei.me</Text>
      <Text style={styles.descricao}>Seu dinheiro organizado da forma que funciona</Text>
      <View style={styles.containerBotoes}>
          <TouchableOpacity 
            style={{...styles.botao, ...styles.botaoMeCadastrar}}
            onPress={() => navigation.navigate("registro")}
          >
            <Text style={{...styles.textoBotao, color: "white"}}>Me cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={{...styles.botao, ...styles.botaoEntrar}}
            onPress={() => navigation.navigate("login")}
          >
            <Text style={{...styles.textoBotao, color: "#27AE60"}}>Entrar</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}