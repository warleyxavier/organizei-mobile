import React from "react";
import { Text, View } from "react-native";

import BotaoVoltar from "../BotaoVoltar";

import { styles } from "./styles";

export default function StatusBar() {
  return (
    <View style={styles.container}>
      <BotaoVoltar/>
      <Text style={styles.descricao}>Categorias</Text>
    </View>
  );
}