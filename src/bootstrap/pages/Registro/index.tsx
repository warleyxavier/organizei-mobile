import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";

import restClient from "../../../services/RestClient";

import { styles as commonStyles } from "../../common/styles";

interface Usuario{
  nomeCompleto: string,
  email: string,
  senha: string
}

const Validacoes = Yup.object().shape({
  nomeCompleto: Yup.string().required("Campo de preenchimento obrigatório!"),
  email: Yup.string().required("Campo de preenchimento obrigatório!").email("Não é um email válido"),
  senha: Yup.string().required("Campo de preenchimento obrigatório!").min(6, "A senha deve possuir no mínimo 6 horas!")
});

export default function Registro() {
  const navigation = useNavigation();

  async function registrar(usuario: Usuario) {
    const response = await restClient.post("usuarios/registrar", usuario);
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
        onSubmit={async (usuario: Usuario) => await registrar(usuario)}
        validationSchema={Validacoes}
        validateOnMount={true}
      >
        {({ handleChange, handleSubmit, values, isValid }) => (
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
              style={[commonStyles.botao, isValid ? {} : {backgroundColor: "#E4FDE1"}]}
              onPress={() => handleSubmit()}
              disabled={!isValid}
            >
              <Text style={commonStyles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
}