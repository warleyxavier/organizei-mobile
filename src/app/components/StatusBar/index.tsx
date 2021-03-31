import React from "react";
import { Text, View } from "react-native";

import BotaoVoltar from "../BotaoVoltar";

import { styles } from "./styles";

interface StatusBarData{
  descricao: string
}

const StatusBar: React.FC<StatusBarData> = ({descricao}) => {
  return (
    <View style={styles.container}>
      <BotaoVoltar/>
      <Text style={styles.descricao}>{descricao}</Text>
    </View>
  );
}

export default StatusBar;