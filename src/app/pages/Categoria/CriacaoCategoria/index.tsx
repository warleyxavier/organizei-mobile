import React from "react";
import { Text, TextInput, View } from "react-native";
import { Formik } from "formik";

import { commonStyles } from "../../../../common/styles";

import StatusBar from "../../../components/StatusBar";
import BotaoGrande from "../../../components/BotaoGrande";

export default function CriacaoCategoria() {
  return (
    <View style={commonStyles.container}>
      <StatusBar descricao={"Novo orçamento"} />
      <Formik        
        initialValues={{}}
        onSubmit={() => {}}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={commonStyles.formContainer}>
            <TextInput
              style={commonStyles.campo}
              placeholder="Descrição"
              placeholderTextColor="gray"
            />
          </View>
        )}
      </Formik>
      <BotaoGrande
        acao={() => {}}
        descricao={"Salvar"}
      />
    </View>
  );
}