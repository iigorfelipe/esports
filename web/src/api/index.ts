import axios from 'axios';

const URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: URL,
});

export default api;