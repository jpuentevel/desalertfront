import axios from "axios";

const baseURL = "https://hero-desalert-api.herokuapp.com/api/personas";

const registro = async (restURL, credentials) => {
  const fullURL = `${baseURL}/${restURL}`;
  const response = await axios.post(fullURL, credentials, { headers: { 'Content-Type': 'application/json', } });
  const data = await response.data;
  return response;
};

export { registro };
