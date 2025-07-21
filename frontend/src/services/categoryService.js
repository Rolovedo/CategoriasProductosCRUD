import axios from 'axios';
const API = 'http://localhost:3001';

export const getCategories = () => axios.get(`${API}/categories`);
export const getCategory = (id) => axios.get(`${API}/categories/${id}`);
export const createCategory = (data) => axios.post(`${API}/categories`, data);
export const updateCategory = (id, data) => axios.put(`${API}/categories/${id}`, data);
export const deleteCategory = (id) => axios.delete(`${API}/categories/${id}`);