import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import RotasAutenticacao from "./src/routes/RotasAutenticacao";

export default function App() {

  return (
    <NavigationContainer>
      <RotasAutenticacao />
    </NavigationContainer>
  );
}