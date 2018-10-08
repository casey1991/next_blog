import { api } from "../APIs/index";
const login = async payload => {
  const response = await api.post("auth/token", payload);
  return response;
};
const getCurrentUser = async () => {
  const response = await api.get("user");
  return response;
};
export default {
  login,
  getCurrentUser
};
