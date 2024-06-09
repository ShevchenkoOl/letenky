import axios from "axios";

const instance = axios.create({
  baseURL: "https://auth-backend-lesson.herokuapp.com/api",
  //"https://64459dec0431e885f0014375.mockapi.io"   //'https://connections-api.herokuapp.com/'
});

export const register = async (data) => {
  const { data: result } = await instance.post("/users/signup", data);
  return result;
};

export const logout = async () => {
  instance.defaults.headers.common.Authorization = null;
};

export const login = async (userData) => {
  const { data: result } = await instance.post("/users/login", userData);
  return result;
};
