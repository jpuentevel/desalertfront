import api from "./api";
const getPublicContent = () => {
  return api.get("/test/all");
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};
export default UserService;
