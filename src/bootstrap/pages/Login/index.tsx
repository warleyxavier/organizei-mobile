import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { styles as commonStyles } from "../../common/styles";

export default function Login() {
  const navigation = useNavigation();

  return(
    <View style={commonStyles.container}>
      <TouchableOpacity
        style={commonStyles.botaoVoltar}
        onPress={() => navigation.navigate("apresentacao")}
      >
        <FontAwesome name="arrow-left" size={32} color="white"/>
      </TouchableOpacity>
      <Text style={commonStyles.titulo}>Faça login no seu app</Text>
      <TextInput
        style={commonStyles.campo}
        placeholder="Seu e-mail"
        placeholderTextColor="gray"
      />
      <TextInput
        style={commonStyles.campo}
        placeholder="Sua senha"
        placeholderTextColor="gray"
      />
      <TouchableOpacity
        style={commonStyles.botao}
      >
        <Text style={commonStyles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}