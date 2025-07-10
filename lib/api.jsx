const { default: axios } = require("axios");

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Content: 'application/json',
  },
});

export default api;