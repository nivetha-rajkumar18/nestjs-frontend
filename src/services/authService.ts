import axios from "axios";
import { AuthCredentials, RegisterData } from "../types/auth";

const API_URL = "http://localhost:3000/auth";

export const login = async (credentials: AuthCredentials) => {
  const { data } = await axios.post(`${API_URL}/login`, credentials);
  return data; // contains access_token
};

export const register = async (data: RegisterData) => {
  const response = await axios.post(`${API_URL}/register`, data);
  return response.data;
};
