import React, { useContext } from "react";

import AutenticacaoContext from "../contexts/AutenticacaoContext";

export function useAutenticacao() {
  const context = useContext(AutenticacaoContext);
  return context;
}