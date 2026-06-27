import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import ProductList from './views/ProductList';
import ProductForm from './components/ProductForm';
import { productService } from './service/productService';

export default function App() {
  const [editingProduct, setEditingProduct] = useState(null);

  const handleSave = async (updatedProduct) => {
    try {
      await productService.update(updatedProduct.id, updatedProduct);
      alert(`Producto "${updatedProduct.nombre}" actualizado con éxito.`);
      setEditingProduct(null);
    } catch (error) {
      console.error("Error actualizando producto", error);
      alert("Hubo un error al actualizar el producto.");
    }
  };

  const handleCancel = () => {
    setEditingProduct(null); // Volver a la lista sin guardar
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* Barra de navegación simulada */}
        <nav className="bg-emerald-600 text-white p-4 shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold tracking-wide">
              <i className="fas fa-shopping-bag mr-2"></i> Tienda Unamad
            </h1>
            <span className="bg-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
              Panel de Administración
            </span>
          </div>
        </nav>

        {/* Contenido Dinámico */}
        <main className="py-6">
          {editingProduct ? (
            <ProductForm
              product={editingProduct}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          ) : (
            <ProductList onEdit={(product) => setEditingProduct(product)} />
          )}
        </main>
      </div>
    </CartProvider>
  );
}