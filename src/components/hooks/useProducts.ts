import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  description?: string;
}

interface ProductResponse {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: Product[];
}

export const useProducts = (page: number, limit: number = 10) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get<ProductResponse>(`http://localhost:3005/product?page=${page}&limit=${limit}`)
      .then((res) => {
        // **Append new products instead of replacing**
        setProducts((prev) => [...prev, ...res.data.data]);
        setTotalPages(res.data.totalPages);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message || "Failed to fetch products");
        setLoading(false);
      });
  }, [page, limit]);

  return { products, totalPages, loading, error };
};
