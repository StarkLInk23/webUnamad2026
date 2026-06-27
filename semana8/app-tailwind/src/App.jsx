/*
function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-blue-600">
          Universidad Nacional Amazónica de Madre de Dios
        </h1>
        <p className="text-gray-600">
          Desarrollador Frontend
        </p>
      </div>
    </div>
  )
}

export default App;


import { CardUser } from "./components/CardUser";
import React from 'react'

function App() {
  return (
    <div>
      <CardUser/>
    </div>
  )
}

export default App;
*/
import { ProductsCard } from "./components/ProductsCard";
import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      <header className="bg-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-4xl font-bold">
            Dashboard de Productos
          </h1>

          <p className="mt-2">
            React + Tailwind + Axios
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <ProductsCard />
      </main>

    </div>
  );
}

export default App;
