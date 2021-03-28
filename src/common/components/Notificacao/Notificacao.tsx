import React from "react";
import { StyleSheet } from "react-native";
import { Snackbar } from "react-native-paper";

import { useNotificacao } from "../../../hooks/useNotificacao";

export default function Notificacao() {
  const { deveExibir, mensagem } = useNotificacao();

  return (
    <Snackbar
      visible={deveExibir}
      onDismiss={() => { }}
      style={styles.container}

    >
      {mensagem}
    </Snackbar>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    bottom: 15
  },
});