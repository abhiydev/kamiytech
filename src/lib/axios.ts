// /lib/axios.ts
import axios from 'axios';

const base =
  process.env.NODE_ENV === 'development'
    ? ''                                // → calls “/api/…” on the same origin
    : process.env.NEXT_PUBLIC_API_BASE; // → your production URL

const api = axios.create({ baseURL: base });
export default api;
