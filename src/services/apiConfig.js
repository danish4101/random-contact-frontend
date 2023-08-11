import axios from "axios";



let apiUrl = {
  production: "https://random-data-api-50875b874049.herokuapp.com/api",
  development: "https://random-data-api-50875b874049.herokuapp.com/api"
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrl.development;
} else {
  apiUrl = apiUrl.production;
}

const api = axios.create({
  baseURL: apiUrl
});

export default api;