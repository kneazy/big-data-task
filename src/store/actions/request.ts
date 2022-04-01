import axios, { AxiosInstance } from "axios"

const defaultConfig = {
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000,
};

export const request = (): AxiosInstance => {
  return axios.create(defaultConfig);
};
