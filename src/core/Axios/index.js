import axios from 'axios';
import Config from '../config';

export const getheadersConf = () => {
  return {
    'Content-Type': 'application/json',
  };
};

export const axiosService = axios.create({
  baseURL: Config.baseUrl,
  headers: getheadersConf(),
});


export const request = async ({ url, data }, method = 'get') => {
  if (!['get', 'post', 'put', 'patch'].includes(method)) return;
  return await axiosService[method](
    url,
    method !== 'get' ? { ...data } : { ...data, headers: getheadersConf() },
    method !== 'get' && { headers: getheadersConf() }
  );
};

