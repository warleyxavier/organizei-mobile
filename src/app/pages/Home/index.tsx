import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Menu from "../../components/Menu";
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
    <View style={styles.container} >
      <View style={styles.contaContainer}>
        <Text style={styles.descricaoConta}>Saldo disponível</Text>
        <Text style={styles.saldoDisponivelConta}>R$ {saldoConta}</Text>
      </View>     
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.menu}
      >
        <Menu iconName="attach-money" descricao = "Categorias" onPress={() => navigation.navigate("consultaCategorias")} />
        <Menu iconName="attach-money" descricao = "Categorias" onPress={() => {Alert.alert("Clicou")}} />
        <Menu iconName="attach-money" descricao = "Categorias" onPress={() => {Alert.alert("Clicou")}} />
        <Menu iconName="attach-money" descricao = "Categorias" onPress={() => {Alert.alert("Clicou")}} />
        <Menu iconName="attach-money" descricao = "Categorias" onPress={() => {Alert.alert("Clicou")}} />
        <Menu iconName="attach-money" descricao = "Categorias" onPress={() => {Alert.alert("Clicou")}} />
        <Menu iconName="attach-money" descricao = "Categorias" onPress={() => {Alert.alert("Clicou")}} />
        <Menu iconName="attach-money" descricao = "Categorias" onPress={() => {Alert.alert("Clicou")}} />
        <Menu iconName="attach-money" descricao = "Categorias" onPress={() => {Alert.alert("Clicou")}} />
        <Menu iconName="attach-money" descricao = "Categorias" onPress={() => {Alert.alert("Clicou")}} />
        <Menu iconName="attach-money" descricao = "Categorias" onPress={() => {Alert.alert("Clicou")}} />
        <Menu iconName="attach-money" descricao = "Categorias" onPress={() => {Alert.alert("Clicou")}} />
        <Menu iconName="attach-money" descricao = "Categorias" onPress={() => {Alert.alert("Clicou")}} />
        <Menu iconName="attach-money" descricao = "Categorias" onPress={() => {Alert.alert("Clicou")}} />
      </ScrollView> 
    </View>
  );
}