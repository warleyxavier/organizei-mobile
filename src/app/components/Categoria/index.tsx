import React from "react";
import { View, Text } from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable';

import OpcoesItemMenu from "../OpcoesItemMenu";

import { styles } from "./styles";

interface CategoriaData {
  descricao: string,
  percentualPrevisto: number,
  valorPrevisto: number,
  tipo: "Receita" | "Despesa"
}

const Categoria: React.FC<CategoriaData> = ({ descricao, percentualPrevisto, valorPrevisto, tipo }) => {
  return (
    <Swipeable
      renderRightActions={OpcoesItemMenu}
    >

      <View style={[styles.container, { borderLeftColor: tipo == "Despesa" ? "#e5383b" : "#27AE60" }]}>
        <Text style={styles.descricao}>{descricao}</Text>
        <View>
          {tipo == "Despesa" && (
            <>
              <Text style={styles.valor}>{percentualPrevisto.toFixed(2)}%</Text>
              <Text style={styles.valor}>R$ {valorPrevisto.toFixed(2)}</Text>
            </>
          )}
        </View>
      </View>
    </Swipeable>
  );
}

export default Categoria;