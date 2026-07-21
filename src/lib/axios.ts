// /lib/axios.ts
import axios from 'axios';

const base =
  process.env.NODE_ENV === 'development'
    ? ''
    : (process.env.NEXT_PUBLIC_API_BASE || '');

const api = axios.create({ baseURL: base });
export default api;
