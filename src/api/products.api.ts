import axios from 'axios';
import type { Product, CreateProductDTO } from '../types/product.type';


const API_URL = import.meta.env.VITE_API_URL;


//Get all products
export const getProducts = async (): Promise<Product[]> => { 
    const response = await axios.get<Product[]>(`${API_URL}/products`);
    return response.data;
}


//Get product by ID
export const getProductById = async (id: number): Promise<Product> => {
    const response = await axios.get<Product>(`${API_URL}/products/${id}`);
    return response.data;
}


//Create a new product
export const createProduct = async (productData: CreateProductDTO): Promise<Product> => {
    const response = await axios.post<Product>(`${API_URL}/products`, productData);
    return response.data;
}

//Update a product
export const updateProduct = async (id: number, productData: Partial<CreateProductDTO>): Promise<Product> => {
    const response = await axios.put<Product>(`${API_URL}/products/${id}`, productData);
    return response.data;
}

//Delete a product
export const deleteProduct = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/products/${id}`);
}

