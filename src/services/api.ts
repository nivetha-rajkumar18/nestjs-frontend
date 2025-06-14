import axios from 'axios';
const API_URL = 'http://localhost:3000/products';

export const getProducts = () => axios.get(API_URL);
export const createProduct = (data: any) => axios.post(API_URL, data);
export const updateProduct = (id: string, data: any) => axios.patch(`${API_URL}/${id}`, data);
export const deleteProduct = (id: string) => axios.delete(`${API_URL}/${id}`);
