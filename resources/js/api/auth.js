import API from './index';

const login = (data) => {
  return API.post(`/api/v1/auth/login`, data);
};

const register = (data) => {
  return API.post(`/api/v1/auth/register`, data);
};

const setCSRFCookie = () => {
  return API.get(`/sanctum/csrf-cookie`);
}

const getAuthUser = () => {
  return API.get(`/api/v1/auth/user`)
};

export {
  login,
  register,
  getAuthUser,
  setCSRFCookie,
};