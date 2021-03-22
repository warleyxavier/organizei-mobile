import axios from "axios";

const restClient = axios.create({
  baseURL: "https://organizei-back-end-homologacao.herokuapp.com/"
});

export default restClient;