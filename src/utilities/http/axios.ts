import axios, { AxiosRequestConfig } from 'axios';

const requestConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { 'Content-Type': 'application/json', authorization: 'abc' },
};

export const axiosInstance = axios.create(requestConfig);
