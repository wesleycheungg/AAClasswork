import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    //login
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    //logout
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const signup = (userData) => {
  return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
  return axios.post('/api/users/login', userData);
};