export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface CreateProductDTO {
  name: string;
  category: string;
  price: number;
  stock: number;
  description?: string;
}
