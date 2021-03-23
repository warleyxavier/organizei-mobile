import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import { AutenticacaoProvider } from "./src/contexts/AutenticacaoContext";
import Rotas from "./src/routes/Rotas";

export default function App() {

  return (
    <NavigationContainer>
      <AutenticacaoProvider>
        <Rotas />
      </AutenticacaoProvider>
    </NavigationContainer>
  );
}