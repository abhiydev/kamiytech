// /lib/axios.ts
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE || '', // e.g., http://localhost:3000
});

export default api;
