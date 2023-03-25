import axiosClient from "@/services/axiosClient";

export default {
  login({ username, password }) {
    return axiosClient.post("auth/login", { username, password });
  },

  logout() {
    return axiosClient.post("auth/logout");
  },

  refresh() {
    return axiosClient.post("auth/refresh");
  },

  me() {
    return axiosClient.get("auth/me");
  },
};
