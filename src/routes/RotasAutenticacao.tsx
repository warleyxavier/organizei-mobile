import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Apresentacao from "../bootstrap/pages/Apresentacao"
import Login from "../bootstrap/pages/Login"
import Registro from "../bootstrap/pages/Registro"

const Stack = createStackNavigator();

export default function RotasAutenticacao() {
  return (
    <Stack.Navigator 
      initialRouteName="apresentacao"
      headerMode="none"
    >
      <Stack.Screen
        name="apresentacao"
        component={Apresentacao}
      />
      <Stack.Screen
        name="login"
        component={Login}
      />
      <Stack.Screen
        name="registro"
        component={Registro}
      />
    </Stack.Navigator>
  );
}