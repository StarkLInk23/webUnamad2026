import { useEffect, useState } from "react";
import axios from "axios";

export function CardUser() {

  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const obtenerUsuarios = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(response);
      setUsuarios(response.data);
    } catch (error) {
      setError("Error al cargar los usuarios");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold">Cargando usuarios...</h2>
      </div>
    );
  }


  if (error) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-red-600 text-2xl font-bold">{error}</h2>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Lista de Usuarios
      </h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {usuarios.map((usuario) => (
          <div
            key={usuario.id}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-xl font-bold text-blue-600">
              {usuario.name}
            </h2>
            <p className="mt-2">{usuario.email}</p>
            <p>{usuario.phone}</p>
            <p>{usuario.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}