import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api', 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

/* api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem({user.token});
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
        AsyncStorage.removeItem('authToken');
        
    }
    return Promise.reject(error);
  }
); */

export default api;
