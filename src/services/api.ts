// api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // agora bate no seu proxy
});

export default api;
