import axios from 'axios';
import Vue from '../app.js'

axios.defaults.withCredentials = true;

const instanse = axios.create({
  baseURL: '/',
  withCredentials: true,
});

instanse.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    Promise.reject(error)
  });

instanse.interceptors.response.use((response) => {
  const { message } = response.data;
  if (message) {
    Vue.$toast.success(message, {
      duration: 2000,
    });
  }

  return response
}, function (error) {
  const { message } = error.response.data;
  Vue.$toast.error(message, {
    duration: 2000,
  });

  return Promise.reject(error);
});

export default instanse;