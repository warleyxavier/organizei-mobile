import React from "react";
import { View,  TextInput, Keyboard } from "react-native";
import { Formik } from "formik";
import { TextInputMask } from 'react-native-masked-text'
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";

import restClient from "../../../../services/RestClient";

import { useNotificacao } from "../../../../hooks/useNotificacao";

import { commonStyles } from "../../../../common/styles";

import StatusBar from "../../../components/StatusBar";
import BotaoGrande from "../../../components/BotaoGrande";
import Field from "../../../components/Field";

import CategoriaParaCadastro from "../../../dto/CategoriaParaCadastro";

const Validacoes = Yup.object().shape({
  nome: Yup.string().required("Campo de preenchimento obrigatório!")});

export default function CriacaoCategoria() {
  const navigation = useNavigation();
  const { iniciarProcessamento, finalizarProcessamento } = useNotificacao();

  async function cadastrarCategoria(dados: any) {
    Keyboard.dismiss();
    const categoria: CategoriaParaCadastro = new CategoriaParaCadastro(dados.nome, dados.porcentagem, dados.valorPrevisto);
    try {
      iniciarProcessamento("Cadastrando orçamento ...");
      await restClient.post("categorias", categoria);      
    } finally {
      finalizarProcessamento();
    }
    navigation.navigate("consultaCategorias");
  }

  return (
    <View style={commonStyles.container}>
      <StatusBar descricao={"Novo orçamento"} />
      <Formik
        initialValues={{
          nome: "",
          porcentagem: "0",
          valorPrevisto: "0",
          tipo: "Despesa"
        }}
        onSubmit={async (values: any) => {
          await cadastrarCategoria(values);          
        }}
        validationSchema={Validacoes}
        validateOnMount={true}
      >
        {({ handleChange, handleSubmit, values, isValid }) => (
          <>
            <View style={commonStyles.formContainer}>
              <Field
                label="Descrição"
                render={props =>
                  <TextInput
                    {...props}
                    placeholder="Descrição"
                    placeholderTextColor="gray"
                    value={values.nome}
                    onChangeText={handleChange("nome")}
                  />
                }
              />
              <Field
                label="Valor Previsto"
                render={props =>
                  <TextInputMask
                    {...props}
                    type={'money'}
                    options={{
                      precision: 2,
                      separator: ',',
                      delimiter: '.',
                      suffixUnit: ''
                    }}
                    value={values.valorPrevisto}
                    onChangeText={handleChange("valorPrevisto")}
                  />
                }
              />
              <Field
                label="Porcentagem"
                render={props =>
                  <TextInputMask
                    {...props}
                    type={'custom'}
                    options={{
                      mask: '999'
                    }}
                    value={values.porcentagem}
                    onBlur={() => {
                      if (values.porcentagem != '')
                        return;

                        (handleChange("porcentagem"))('0');
                    }}
                    onChangeText={porcentagem => {
                      let novaPorcentagem = porcentagem;
                      if ((novaPorcentagem != '') && (Number(novaPorcentagem) > 100))
                        novaPorcentagem = '100';

                      if (novaPorcentagem != '')
                        novaPorcentagem = Number(novaPorcentagem).toString();

                      (handleChange("porcentagem"))(novaPorcentagem);
                    }}
                    keyboardType="number-pad"
                  />
                }
              />

            </View>
            <BotaoGrande
              acao={handleSubmit}
              descricao={"Salvar"}
              enabled={isValid}
            />
          </>
        )}
      </Formik>
    </View>
  );
}