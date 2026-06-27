import { useEffect, useState } from "react";
import { productService } from "../service/productService";

export default function ProductList({ onEdit }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await productService.getAll();
      setProducts(data);
    } catch (error) {
      console.error("Error cargando productos", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("¿Está seguro de eliminar este producto?")) {
      await productService.delete(id);
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  if (loading) {
    return <p className="text-center text-xl mt-10">Cargando catálogo...</p>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Catálogo de Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow-md border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <img
                src={product.imagen || "https://via.placeholder.com/150"}
                alt={product.nombre}
                className="w-full h-44 object-cover rounded-lg mb-4"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/300x200?text=Sin+Imagen";
                }}
              />
              <h2 className="text-xl font-semibold text-gray-700">{product.nombre}</h2>
              <p className="text-emerald-600 font-bold mt-2">${product.precio}</p>
            </div>

            <div className="flex justify-end gap-2 mt-4 pt-4 border-t border-gray-100">
              <button
                onClick={() => onEdit(product)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition"
                title="Editar Producto"
              >
                <i className="fas fa-edit"></i>
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg transition"
                title="Eliminar Producto"
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}