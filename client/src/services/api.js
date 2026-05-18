import axios from 'axios';

const API = axios.create({
  baseURL: 'https://mini-crm-seg2.onrender.com/api',
});

export default API;