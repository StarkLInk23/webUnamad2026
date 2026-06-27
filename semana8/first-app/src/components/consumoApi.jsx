import { useState, useEffect } from 'react';

export function ListarUsuarios(){
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) throw new Error('Error al obtener los datos');
        return response.json();
      })
      .then((data) => {
        setUsuarios(data);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando usuarios de la API ... </p>;
  if (error) return <p style={{color:'red'}}>Error: {error}</p>;

  return (
    <div style={{padding: '20px', marginTop: '10px', border: '1px solid #ccc'}}>
      <h3>Consumo de API</h3>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <strong>{usuario.name}</strong> - {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  )
}