import axios from 'axios';

const api = axios.create({
  baseURL: 'https://crudcrud.com/api/086e6a5097ce49e5a7dba7dc82428028/books'
});

export default api;