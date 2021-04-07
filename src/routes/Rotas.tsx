import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useAutenticacao } from "../hooks/useAutenticacao";

import RotasAplicacao from "./RotasAplicacao";
import RotasAutenticacao from "./RotasAutenticacao";

export default function Rotas() {
  const { autenticado } = useAutenticacao();

// AsyncStorage.clear().then(() => {
//  });

  return autenticado ? <RotasAplicacao/> : <RotasAutenticacao/>;
}