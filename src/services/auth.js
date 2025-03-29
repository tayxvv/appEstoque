import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './api';

const TOKEN_KEY = 'authToken';
const USER_KEY = 'user';

export const login = async (username, password) => {
  try {
    const response = await api.post('/login', { username, password });
    const token = response.data.token;
    const user = response.data.user;
    if (token && user) {
        await AsyncStorage.setItem(TOKEN_KEY, token);
        await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    return response;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export const getUser = async () => {
    const userString = await AsyncStorage.getItem(USER_KEY);
    return userString ? JSON.parse(userString) : null;
};

export const getToken = async () => {
  return await AsyncStorage.getItem(TOKEN_KEY);
};

export const logout = async () => {
  await AsyncStorage.removeItem(TOKEN_KEY);
};