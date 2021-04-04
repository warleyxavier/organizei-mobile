import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

import Menu from "../../components/Menu";
import Tile from "../../components/Tile";
import Tiles from "../../components/Tiles";
import StatusBarHome from "../../components/StatusBarHome";
import restClient from "../../../services/RestClient";

import { styles } from "./styles";

export default function Home() {
  const navigation = useNavigation();

  const [saldoConta, setSaldoConta] = useState<string>("0,00");

  useEffect(() => {
    (async () => {
      const response = await restClient.get("/contas/padrao");
      const saldoFormatado = Number(response.data.saldo).toFixed(2);
      setSaldoConta(saldoFormatado);
    })()
  }, []);

  return (
    <LinearGradient 
      style={styles.container} 
      colors={['white', '#27AE60']}
    >
      <StatusBarHome/>
      <Tile />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.menu}
      >
        <Menu iconName="attach-money" descricao="Categorias" onPress={() => navigation.navigate("consultaCategorias")} />
        <Menu iconName="attach-money" descricao="Categorias" onPress={() => { Alert.alert("Clicou") }} />
        <Menu iconName="attach-money" descricao="Categorias" onPress={() => { Alert.alert("Clicou") }} />
        <Menu iconName="attach-money" descricao="Categorias" onPress={() => { Alert.alert("Clicou") }} />
        <Menu iconName="attach-money" descricao="Categorias" onPress={() => { Alert.alert("Clicou") }} />
        <Menu iconName="attach-money" descricao="Categorias" onPress={() => { Alert.alert("Clicou") }} />
        <Menu iconName="attach-money" descricao="Categorias" onPress={() => { Alert.alert("Clicou") }} />
        <Menu iconName="attach-money" descricao="Categorias" onPress={() => { Alert.alert("Clicou") }} />
        <Menu iconName="attach-money" descricao="Categorias" onPress={() => { Alert.alert("Clicou") }} />
        <Menu iconName="attach-money" descricao="Categorias" onPress={() => { Alert.alert("Clicou") }} />
        <Menu iconName="attach-money" descricao="Categorias" onPress={() => { Alert.alert("Clicou") }} />
        <Menu iconName="attach-money" descricao="Categorias" onPress={() => { Alert.alert("Clicou") }} />
        <Menu iconName="attach-money" descricao="Categorias" onPress={() => { Alert.alert("Clicou") }} />
        <Menu iconName="attach-money" descricao="Categorias" onPress={() => { Alert.alert("Clicou") }} />
      </ScrollView>
      <Tiles/>
    </LinearGradient>
  );
}