import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { styles as commonStyles } from "../../common/styles";

export default function Registro() {
  const navigation = useNavigation();

  return (
    <View style={commonStyles.container}>
      <TouchableOpacity
        style={commonStyles.botaoVoltar}
        onPress={() => navigation.navigate("apresentacao")}
      >
        <FontAwesome name="arrow-left" size={32} color="white" />
      </TouchableOpacity>
      <Text style={commonStyles.titulo}>Me cadastrar no app</Text>
      <TextInput
        style={commonStyles.campo}
        placeholder="Seu nome completo"
        placeholderTextColor="gray"
      />
      <TextInput
        style={commonStyles.campo}
        placeholder="Seu e-mail"
        placeholderTextColor="gray"
      />
      <TextInput
        style={commonStyles.campo}
        placeholder="Sua senha"
        placeholderTextColor="gray"
        secureTextEntry={true}        
      />
        <TextInput
        style={commonStyles.campo}
        placeholder="Repita sua senha"
        placeholderTextColor="gray"
        secureTextEntry={true}            
      />
      <TouchableOpacity
        style={commonStyles.botao}
      >
        <Text style={commonStyles.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}