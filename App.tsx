import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import Notificacao from './src/common/components/Notificacao/Notificacao';
import { AutenticacaoProvider } from "./src/contexts/AutenticacaoContext";
import { NotificacaoProvider } from "./src/contexts/NotificacaoContext";

import Rotas from "./src/routes/Rotas";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#27AE60',
    accent: '#f1c40f',
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <AutenticacaoProvider>
        <NotificacaoProvider>
          <PaperProvider theme={theme}>
            <Rotas />
            <Notificacao/>
          </PaperProvider>
        </NotificacaoProvider>
      </AutenticacaoProvider>
    </NavigationContainer>
  );
}