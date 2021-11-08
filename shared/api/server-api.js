import axios from 'axios';
import { API_URL_DOMAIN } from '../constants';

export const Api = axios.create({
  baseURL: `${API_URL_DOMAIN}`,
});
