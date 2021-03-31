import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

interface BotaoData {
  descricao: string,
  acao(): void
}

const BotaoGrande: React.FC<BotaoData> = ({descricao, acao}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>{descricao}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BotaoGrande;