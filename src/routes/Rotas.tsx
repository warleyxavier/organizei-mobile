import React from "react";

import { useAutenticacao } from "../hooks/useAutenticacao";

import RotasAplicacao from "./RotasAplicacao";
import RotasAutenticacao from "./RotasAutenticacao";

export default function Rotas() {
  const { autenticado } = useAutenticacao();

  return autenticado ? <RotasAplicacao/> : <RotasAutenticacao/>;
}