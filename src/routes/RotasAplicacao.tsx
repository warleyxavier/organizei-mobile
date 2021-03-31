import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../app/pages/Home";
import ConsultaCategorias from "../app/pages/Categoria/ConsultaCategorias";
import CriacaoCategoria from "../app/pages/Categoria/CriacaoCategoria";

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
    </Stack.Navigator>
  );
}