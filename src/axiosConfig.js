import axios from 'axios';
import { Redirect } from 'react-router';
import { history } from '.';


const token =  'Bearer ' + localStorage.getItem('access_token') || '';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': token
  }
})

instance.interceptors.response.use(undefined, function (error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        localStorage.removeItem('access_token');
        window.location = '/login';
    }
    return Promise.reject(error.response);
  }
});

export default instance;
