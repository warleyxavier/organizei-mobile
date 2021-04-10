import React, { useState } from "react";
import { View, FlatList, Alert, ToastAndroid } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import StatusBar from "../../../components/StatusBar";
import Categoria from "../../../components/Categoria";
import BotaoNovo from "../../../components/BotaNovo";

import restClient from "../../../../services/RestClient";

import { styles } from "./styles";
import { commonStyles } from "../../../../common/styles";

export default function ConsultaCategorias() {
  const [categorias, setCategorias] = useState<any[]>([]);
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        const response = await restClient.get("/categorias");
        setCategorias(response.data);
      })();
    }, [])
  );

  async function deletar(codigo: number) {
    await restClient.delete(`categorias/${codigo}`);
    setCategorias(categorias.filter(categoria => categoria.codigo != codigo));
    ToastAndroid.show("Orçamento excluído com sucesso", 8000);
  }

  async function alterar(codigo: number, nome: string, valorPrevisto: number, porcentagemPrevista: number) {

    navigation.navigate("alteracaoCategoria", {
      codigoCategoria: codigo,
      nome: nome,
      valorPrevisto,
      porcentagemPrevista
    });
  }

  return (
    <View style={commonStyles.container}>
      <StatusBar descricao={"Orçamentos"} />
      <FlatList
        style={styles.categorias}
        data={categorias}
        keyExtractor={categoria => categoria.codigo}
        renderItem={({ item }) =>
          <Categoria
            codigo={item.codigo}
            descricao={item.nome}
            percentualPrevisto={Number(item.porcentagemPrevista)}
            valorPrevisto={Number(item.valorPrevisto)}
            tipo={item.tipo}
            podeAcessarOpcoes={item.tipo == "Despesa"}
            onDeletar={deletar}
            onAlterar={alterar}
          />}
      />
      <BotaoNovo acao={() => navigation.navigate("criacaoCategoria")} />
    </View>
  )
}