import api from "./api";
import TokenService from "./token.service";
const register = (username, email, password) => {
  return api.post("/auth/signup", {
    username,
    email,
    password,
  });
};
const login = async (username, password) => {
  const response = await api.post("/auth/signin", {
    username,
    password,
  });
  if (response.data.accessToken) {
    TokenService.setUser(response.data);
  }
  return response.data;
};
const logout = () => {
  TokenService.removeUser();
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};
export default AuthService;