import React from "react";
import { View,  TextInput, Keyboard } from "react-native";
import { Formik } from "formik";
import { TextInputMask } from 'react-native-masked-text'
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Yup from "yup";

import restClient from "../../../../services/RestClient";

import { useNotificacao } from "../../../../hooks/useNotificacao";

import { commonStyles } from "../../../../common/styles";

import StatusBar from "../../../components/StatusBar";
import BotaoGrande from "../../../components/BotaoGrande";
import Field from "../../../components/Field";
import CategoriaParaAlteracao from "../../../dto/CategoriaParaAlteracao";

const Validacoes = Yup.object().shape({
  nome: Yup.string().required()});

export default function AlteracaoCategoria() {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const { iniciarProcessamento, finalizarProcessamento } = useNotificacao();

  async function atualizarCategoria(dados: any) {
    Keyboard.dismiss();
    try {
      iniciarProcessamento("Alterando orçamento ...");
      await restClient.put(`categorias/${route.params?.codigoCategoria}`, new CategoriaParaAlteracao(dados.nome, dados.porcentagemPrevista, dados.valorPrevisto));      
    } finally {
      finalizarProcessamento();
    }    

    navigation.navigate("consultaCategorias");
  }

  return (
    <View style={commonStyles.container}>
      <StatusBar descricao={"Orçamento"} />
      <Formik
        initialValues={{
          nome: route.params?.nome,
          porcentagemPrevista: route.params?.porcentagemPrevista.toString(),
          valorPrevisto: route.params?.valorPrevisto,
        }}
        onSubmit={async (values: any) => {
          await atualizarCategoria(values);          
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
                    value={values.porcentagemPrevista}
                    onBlur={() => {
                      if (values.porcentagemPrevista != '')
                        return;

                        (handleChange("porcentagemPrevista"))('0');
                    }}
                    onChangeText={porcentagem => {
                      let novaPorcentagem = porcentagem;
                      if ((novaPorcentagem != '') && (Number(novaPorcentagem) > 100))
                        novaPorcentagem = '100';

                      if (novaPorcentagem != '')
                        novaPorcentagem = Number(novaPorcentagem).toString();

                      (handleChange("porcentagemPrevista"))(novaPorcentagem);
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