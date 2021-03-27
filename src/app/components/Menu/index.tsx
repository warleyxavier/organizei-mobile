import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

interface MenuData {
  iconName: any,
  descricao: string,
  onPress(): void,
}

const Menu: React.FC<MenuData> = ({iconName, descricao, onPress}) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <MaterialIcons name={iconName} size={30} color="#27AE60" />
      </View>
      <Text style={styles.descricao}>{descricao}</Text>
    </TouchableOpacity>
  );
}

export default Menu;













