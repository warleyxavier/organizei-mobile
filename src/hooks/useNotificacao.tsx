import { useContext } from "react";

import NotificacaoContext from "../contexts/NotificacaoContext";

export function useNotificacao() {
  const context = useContext(NotificacaoContext);
  return context;
}