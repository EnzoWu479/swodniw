/* eslint-disable @typescript-eslint/no-non-null-assertion */
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
});
export const project_name = "CRM_Admin";
export async function refreshAccessToken() {
  try {
    const credentials = localStorage.getItem(`@${project_name}: refreshToken`);

    if (typeof credentials === "string") {
      const { data } = await api.put("/users/session", {
        refresh_token: credentials,
      });
      localStorage.setItem(`@${project_name}: accessToken`, data.access_token);
      localStorage.setItem(
        `@${project_name}: refreshToken`,
        data.refresh_token
      );
      return data?.access_token;
    }
  } catch (error) {
    // localStorage.clear();
    // window.location.href = "/";
  }
}
api.interceptors.request.use(
  async (config: any) => {
    const accessToken = localStorage.getItem(`@${project_name}: accessToken`);
    if (accessToken) {
      config.headers!.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest.retry) {
      originalRequest.retry = true;
      const accessToken = await refreshAccessToken();
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;
      return api(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default api;
