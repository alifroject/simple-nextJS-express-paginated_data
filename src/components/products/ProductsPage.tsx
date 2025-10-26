"use client"

import { useState, useEffect } from "react";
import { useProducts } from "../hooks/useProducts";

export default function ProductsPage() {
  const [page, setPage] = useState(1);
  const { products, totalPages, loading, error } = useProducts(page, 10);

  const nextPage = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 200 &&
        page < totalPages &&
        !loading
      ) {
        nextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, totalPages, loading]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Products</h1>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="border rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            <div className="h-40 w-full bg-gray-100 flex items-center justify-center mb-4 rounded-md">
              <span className="text-gray-400">Image</span>
            </div>
            <h2 className="font-semibold text-lg text-gray-800">{p.name}</h2>
            <p className="text-gray-500 mb-2">{p.category}</p>
            <p className="font-bold text-gray-900">${p.price}</p>
            <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
