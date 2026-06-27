import { useEffect, useState } from "react";
import axios from "axios";

export function ProductsCard() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const obtenerProductos = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products?limit=20");
            console.log("Respuesta completa");
            console.log(response);
            console.table(response.data.products);

            setProducts(response.data.products);
        } catch (error) {
            console.error(error);
            setError("Error al obtener los productos.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        obtenerProductos();
    }, []);

    if (loading) {
        return (
            <div className="text-center py-10">
                <h2 className="text-3xl font-bold">
                    Cargando productos ...
                </h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-10">
                <h2 className="text-3xl text-red-600 font-bold">
                    {error}
                </h2>
            </div>
        );
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">
                Catálogo de Productos
            </h2>

            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start"
            >
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
                    >
                        {/* Imagen */}
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-full h-52 object-cover"
                        />

                        {/* Información */}
                        <div className="p-5 flex flex-col">
                            <h3 className="text-lg font-bold mb-2 min-h-14">
                                {product.title}
                            </h3>

                            <p className="text-gray-600 text-sm mb-4 h-20 overflow-hidden">
                                {product.description}
                            </p>

                            <div className="space-y-1">
                                <p className="text-green-600 text-xl font-bold">
                                    ${product.price}
                                </p>

                                <p className="text-yellow-500">
                                    {product.rating}
                                </p>

                                <p className="text-gray-500">
                                    Stock: {product.stock}
                                </p>

                                <p className="text-blue-600 capitalize">
                                    {product.category}
                                </p>

                                <p className="text-purple-600">
                                    Marca: {product.brand}
                                </p>
                            </div>

                            <button
                                className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-800 transition"
                            >
                                Ver detalles
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}