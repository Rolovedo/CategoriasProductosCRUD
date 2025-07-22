import axios from 'axios';
const API = 'http://localhost:3001';

//obtiene todas las categorias
export const getCategories = () => axios.get(`${API}/categories`);

//btiene una categoria por id
export const getCategory = (id) => axios.get(`${API}/categories/${id}`);

//crea una nueva categoria
export const createCategory = (data) => axios.post(`${API}/categories`, data);

//actualiza una categoria existent
export const updateCategory = (id, data) => axios.put(`${API}/categories/${id}`, data);

//elimina una categoria
export const deleteCategory = (id) => axios.delete(`${API}/categories/${id}`);