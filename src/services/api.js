import axios from "axios";

const api = axios.create({
  baseURL: "https://burguer-app-bc804.firebaseio.com/"
});

export default api;
