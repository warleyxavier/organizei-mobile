import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

export default function Login() {
  const navigate = useNavigation();

  return(
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigate.navigate("apresentacao")}
      >
        <FontAwesome name="arrow-left" size={32} color="white"/>
      </TouchableOpacity>
      <Text style={styles.titulo}>Faça login no seu app</Text>
      <TextInput
        style={styles.campo}
        placeholder="Seu e-mail"
        placeholderTextColor="gray"
      />
      <TextInput
        style={styles.campo}
        placeholder="Sua senha"
        placeholderTextColor="gray"
      />
      <TouchableOpacity
        style={styles.botaoEntrar}
      >
        <Text style={styles.textoBotaoEntrar}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}