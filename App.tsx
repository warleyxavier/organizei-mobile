import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from 'react-native-paper';

import Notificacao from './src/common/components/Notificacao/Notificacao';
import { AutenticacaoProvider } from "./src/contexts/AutenticacaoContext";
import { NotificacaoProvider } from "./src/contexts/NotificacaoContext";

import Rotas from "./src/routes/Rotas";

export default function App() {
  return (
    <NavigationContainer>
      <AutenticacaoProvider>
        <NotificacaoProvider>
          <PaperProvider>
            <Rotas />
            <Notificacao/>
          </PaperProvider>
        </NotificacaoProvider>
      </AutenticacaoProvider>
    </NavigationContainer>
  );
}