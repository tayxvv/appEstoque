import axios from 'axios';
import { getToken } from './auth';

const baseURL = 'http://localhost:3334';

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;