import React from "react";
import { View, Text, TextInput, TouchableOpacity, Keyboard } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";

import { useAutenticacao } from "../../../hooks/useAutenticacao";
import { styles as commonStyles } from "../../common/styles";

interface DadosAutenticacao{
  email: string,
  senha: string
}

const Validacoes = Yup.object().shape({
  email: Yup.string().required("Campo de preenchimento obrigatório!").email("Não é um email válido"),
  senha: Yup.string().required("Campo de preenchimento obrigatório!").min(6, "A senha deve possuir no mínimo 6 horas!")
});

export default function Login() {
  const navigation = useNavigation();
  const { autenticar } = useAutenticacao();

  async function logar(dados: DadosAutenticacao) {
    Keyboard.dismiss();
    await autenticar(dados);
  }

  return (
    <View style={commonStyles.container}>
      <TouchableOpacity
        style={commonStyles.botaoVoltar}
        onPress={() => navigation.navigate("apresentacao")}
      >
        <FontAwesome name="arrow-left" size={32} color="white" />
      </TouchableOpacity>
      <Text style={commonStyles.titulo}>Faça login no seu app</Text>
      <Formik
        initialValues={{} as DadosAutenticacao}
        onSubmit={async (dados: DadosAutenticacao) => await logar(dados)}
        validationSchema={Validacoes}
        validateOnMount={true}
      >
        {({ handleChange, handleSubmit, values, isValid }) => (
          <>
            <TextInput
              style={commonStyles.campo}
              placeholder="Seu e-mail"
              placeholderTextColor="gray"
              
              value={values.email}
              onChangeText={handleChange("email")}
            />
            <TextInput
              style={[commonStyles.campo, {textTransform: "lowercase"}]}
              placeholder="Sua senha"
              placeholderTextColor="gray"
              secureTextEntry={true}
              value={values.senha}
              onChangeText={handleChange("senha")}
            />
            <TouchableOpacity
              style={[commonStyles.botao, isValid ? {} : {backgroundColor: "#E4FDE1"}]}
              disabled={!isValid}
              onPress={() => handleSubmit()}
            >
              <Text style={commonStyles.textoBotao}>Entrar</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
}