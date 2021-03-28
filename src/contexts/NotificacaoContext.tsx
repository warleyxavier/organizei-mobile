import React, { createContext, useState } from "react";

interface DadosContexto {
  deveExibir: boolean,
  mensagem: string,
  existeProcessamentoEmExecucao: boolean,
  iniciarProcessamento(mensagem: string): void,
  finalizarProcessamento(): void,
  exibirMensagemErro(mensagem: string): void
}

const NotificacaoContext = createContext<DadosContexto>({} as DadosContexto);

export const NotificacaoProvider: React.FC = ({ children }) => {
  const [deveExibir, setDeveExibir] = useState<boolean>(false);
  const [mensagem, setMensagem] = useState<string>("");
  const [existeProcessamentoEmExecucao, setExisteProcessamentoEmExecucao] = useState<boolean>(false);

  function iniciarProcessamento(mensagem: string): void {
    console.log("MENSAGEM: ", mensagem);
    atualizarMensagem(mensagem);

    setExisteProcessamentoEmExecucao(true);
  }

  function finalizarProcessamento(): void {
    limparEstado();
  }

  function exibirMensagemErro(mensagem: string): void {
    atualizarMensagem(mensagem);
    setTimeout(() => limparEstado(), 8000);
  }

  function atualizarMensagem(mensagem: string): void {
    setMensagem(mensagem);
    setDeveExibir(true);
  }

  function limparEstado(): void {
    setMensagem("");
    setDeveExibir(false);
    setExisteProcessamentoEmExecucao(false);
  }

  console.log("DEVE EXIBIR 2: ", deveExibir);

  return (
    <NotificacaoContext.Provider value={{deveExibir, mensagem, finalizarProcessamento, iniciarProcessamento} as DadosContexto}>
      {children}
    </NotificacaoContext.Provider>
  );
}

export default NotificacaoContext;