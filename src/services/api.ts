import axios, {
    AxiosInstance,
    AxiosResponse,
    AxiosError,
    InternalAxiosRequestConfig,
  } from 'axios';
  
  const BACKEND_URL = 'https://randomuser.me/api';
  const REQUEST_TIMEOUT = 5000;
  
  export const createAPI = (): AxiosInstance => {
    const api = axios.create({
      baseURL: BACKEND_URL,
      timeout: REQUEST_TIMEOUT,
    });
  
    api.interceptors.response.use(
      (response: AxiosResponse) => response,
  
      (error: AxiosError) => Promise.reject(error),
    );
  
    api.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => config
        );
    return api;
  };