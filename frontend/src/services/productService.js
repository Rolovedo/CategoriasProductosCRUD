import axios from 'axios';

const API = 'http://localhost:3001';

//obtiene todos los productos
export const getProducts = () => axios.get(`${API}/products`);

//obtiene un producto por id
export const getProduct = (id) => axios.get(`${API}/products/${id}`);

//crea un nuevo producto
export const createProduct = (data) => axios.post(`${API}/products`, data);

//Actualiza un producto existente
export const updateProduct = (id, data) => axios.put(`${API}/products/${id}`, data);

//elimina un prducto
export const deleteProduct = (id) => axios.delete(`${API}/products/${id}`);