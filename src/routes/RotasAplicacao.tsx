import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../app/pages/Home";
import ConsultaCategorias from "../app/pages/Categoria/ConsultaCategorias";
import CriacaoCategoria from "../app/pages/Categoria/CriacaoCategoria";
import AlteracaoCategoria from "../app/pages/Categoria/AlteracaoCategoria";

const Stack = createStackNavigator();

export default function RotasAplicacao() {
  return (
    <Stack.Navigator
      initialRouteName="home"
      headerMode="none"
    >
      <Stack.Screen
        name="home"
        component={Home}
      />
      <Stack.Screen
        name="consultaCategorias"
        component={ConsultaCategorias}
      />
      <Stack.Screen
        name="criacaoCategoria"
        component={CriacaoCategoria}
      />
      <Stack.Screen
        name="alteracaoCategoria"
        component={AlteracaoCategoria}
      />
    </Stack.Navigator>
  );
}