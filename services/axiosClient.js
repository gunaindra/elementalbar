import axios from "axios";

import { getCookies } from "@/utils/cookies";

const baseURLHost = process.env.HOST;

const axiosClient = axios.create({
  baseURL: baseURLHost,
  timeout: 100000,
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = getCookies("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    console.error("ERROR", error);

    return Promise.reject(error);
  }
);

export default axiosClient;
