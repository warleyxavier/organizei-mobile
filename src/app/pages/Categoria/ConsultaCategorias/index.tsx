import React, { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";

import StatusBar from "../../../components/StatusBar";
import Categoria from "../../../components/Categoria";

import restClient from "../../../../services/RestClient";

import { styles } from "./styles";
import { FlatList } from "react-native-gesture-handler";

export default function ConsultaCategorias() {
  const [categorias, setCategorias] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const response = await restClient.get("/categorias");
      setCategorias(response.data);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar />
      <FlatList
        style={styles.categorias}
        data={categorias}
        keyExtractor={categoria => categoria.codigo}
        renderItem={({ item }) => 
          <Categoria 
            descricao={item.nome} 
            percentualPrevisto={Number(item.porcentegmPrevista)} 
            valorPrevisto={Number(item.valorPrevisto)} 
            tipo={item.tipo}
        />}
      />
    </View>
  )
}