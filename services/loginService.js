import axios from "axios";

const baseURL =
  "https://hero-desalert-api.herokuapp.com/api/auth/iniciarSesion";

const login = async (credentials) => {
  const response = await axios.post(baseURL, credentials);
  const data = await response.data;
  const token = await response.data.tokenDeAcceso;
  return token;
};

export { login };
