import axios from "axios";
import { Alert, ToastAndroid } from "react-native";

const restClient = axios.create({
  baseURL: "https://organizei-back-end-homologacao.herokuapp.com/",
  validateStatus: function (status) {
    return true;
  },
});

restClient.interceptors.response.use((response) => { 
    if (response.status.toString().startsWith('2'))
      return response;

    ToastAndroid.show(response.data.message, 8000);
   // Alert.alert(response.data.message);
    return Promise.reject(response.data.message);
  },
  async function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

export default restClient;