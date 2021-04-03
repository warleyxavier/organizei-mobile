import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

interface BotaoData {
  descricao: string,
  acao(): void,
  enabled?: boolean
}

const BotaoGrande: React.FC<BotaoData> = ({descricao, acao, enabled = false}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.botao, enabled ? styles.botaoHabilitado : styles.botaoDesabilitado]} 
        onPress={acao} 
        disabled={!enabled}
      >
        <Text 
          style={[styles.textoBotao, enabled ? {} : styles.textoDesabilitado]}
        >{descricao}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BotaoGrande;