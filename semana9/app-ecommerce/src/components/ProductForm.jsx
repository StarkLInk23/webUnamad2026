import { useState, useEffect } from "react";

export default function ProductForm({ product, onSave, onCancel }) {
  // Estados para controlar los campos del formulario
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");

  // Si nos pasan un producto para editar, cargamos sus datos en los estados
  useEffect(() => {
    if (product) {
      setNombre(product.nombre || "");
      setPrecio(product.precio || "");
      setImagen(product.imagen || "");
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Estructuramos el objeto actualizado manteniendo el ID original
    const updatedProduct = {
      ...product,
      nombre,
      precio: parseFloat(precio),
      imagen,
    };

    // Llamamos a la función onSave que viene de App.jsx
    onSave(updatedProduct);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-100 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        {product ? "Editar Producto" : "Nuevo Producto"}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre del Producto</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Precio ($)</label>
          <input
            type="number"
            step="0.01"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">URL de la Imagen</label>
          <input
            type="url"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg transition"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition"
          >
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
}