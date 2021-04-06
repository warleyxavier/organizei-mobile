import React from "react";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from "./styles";

export default function OpcoesItemMenu() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.opcao, {backgroundColor: "#dd2c2f"}]}>
        <FontAwesome name="trash-o" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.opcao}>
        <MaterialIcons name="edit" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}