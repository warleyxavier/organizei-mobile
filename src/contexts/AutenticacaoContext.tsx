import React, { useState, useEffect, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import restClient from "../services/RestClient";

interface DadosUsuarioAutenticacao {
  email: string,
  senha: string
}

interface DadosContexto {
  autenticado: boolean,
  token: string,
  autenticar(dados: DadosUsuarioAutenticacao): Promise<void>,
  desautenticar(): void
}

const AutenticacaoContext = createContext<DadosContexto>({} as DadosContexto);

export const AutenticacaoProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    (async () => {
      const tokenArmazenado = await AsyncStorage.getItem("@organizei:token");
      if (tokenArmazenado) {
        setToken(tokenArmazenado);
        restClient.defaults.headers["authorization"] = `Bearer ${tokenArmazenado}`;
      }
    })();
  }, []);

  async function autenticar(dados: DadosUsuarioAutenticacao) {
    const response = await restClient.post("autenticacao/autenticar", dados);
    setToken(response.data.accessToken);
    restClient.defaults.headers["authorization"] = `Bearer ${response.data.accessToken}`;
    await AsyncStorage.setItem("@organizei:token", response.data.accessToken);
  }

  function desautenticar() {
    AsyncStorage.clear().then(() => {
      setToken('');
    });
  }

  return (
    <AutenticacaoContext.Provider value={{ autenticado: !!token, autenticar } as DadosContexto}>
      {children}
    </AutenticacaoContext.Provider>
  );
}

export default AutenticacaoContext;