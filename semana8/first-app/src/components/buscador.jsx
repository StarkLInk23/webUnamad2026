import { useState } from "react";

const PRODUCTOS_MOCK = ['Laptop', 'Smartphone', 'Teclado mecánico', 
'Monitor 4k', 'Mouse gamer', 'Auriculare'];

export function BuscarProductos () {
  const [busqueda, setBusqueda] = useState('');

  const productosFiltrados = PRODUCTOS_MOCK.filter(producto =>
    producto.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{padding: '20px', marginTop: '10px', border: '1px solid #ccc'}}>
      <h3>Buscador de Productos</h3>
      <input 
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      {productosFiltrados.length === 0 ? (
        <p style={{ color: 'red' }}>No se encontraron resul...</p>
      ) : (
        <ul>
          {productosFiltrados.map((prod, index) => (
            <li key={index}>{prod}</li>
          ))}
        </ul>
      )}
    </div>
  )
}