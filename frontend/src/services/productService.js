import axios from 'axios';

const API = 'http://localhost:3001';

export const getProducts = () => axios.get(`${API}/products`);
export const getProduct = (id) => axios.get(`${API}/products/${id}`);
export const createProduct = (data) => axios.post(`${API}/products`, data);
export const updateProduct = (id, data) => axios.put(`${API}/products/${id}`, data);
export const deleteProduct = (id) => axios.delete(`${API}/products/${id}`);