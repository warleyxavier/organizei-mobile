import React from "react";
import { FAB } from 'react-native-paper';

import { styles } from "./styles";

interface BotaoNovoData {
  acao(): void
}

const BotaoNovo: React.FC<BotaoNovoData> = ({acao}) => {
  return <FAB
  style={styles.container}
  icon="plus"    
  color="white"    
  onPress={() => acao()}
/>
}

export default BotaoNovo;