import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";

import restClient from "../../../services/RestClient";

import { styles as commonStyles } from "../../common/styles";

interface Usuario{
  nomeCompleto: string,
  email: string,
  senha: string
}

export default function Registro() {
  const navigation = useNavigation();

  async function registrar(usuario: Usuario) {
    const response = await restClient.post("usuarios/registrar", usuario);
    console.log(response);
  }

  return (
    <View style={commonStyles.container}>
      <TouchableOpacity
        style={commonStyles.botaoVoltar}
        onPress={() => navigation.navigate("apresentacao")}
      >
        <FontAwesome name="arrow-left" size={32} color="white" />
      </TouchableOpacity>
      <Text style={commonStyles.titulo}>Me cadastrar no app</Text>
      <Formik
        initialValues={{} as Usuario}
        onSubmit={async (values: Usuario) => await registrar(values)}

      >
        {({ handleChange, handleSubmit, values }) => (
          <>
            <TextInput
              style={commonStyles.campo}
              placeholder="Seu nome"
              placeholderTextColor="gray"
              value={values.nomeCompleto}
              onChangeText={handleChange("nomeCompleto")}
            />
            <TextInput
              style={commonStyles.campo}
              placeholder="Seu e-mail"
              placeholderTextColor="gray"
              value={values.email}
              onChangeText={handleChange("email")}
            />
            <TextInput
              style={commonStyles.campo}
              placeholder="Sua senha"
              placeholderTextColor="gray"
              secureTextEntry={true}
              value={values.senha}
              onChangeText={handleChange("senha")}
            />
            <TouchableOpacity
              style={commonStyles.botao}
              onPress={() => handleSubmit()}
            >
              <Text style={commonStyles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
}