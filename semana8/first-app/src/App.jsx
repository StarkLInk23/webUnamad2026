//EJEMPLO 1
/*
import React from 'react';
import Header from './components/Headers';

export default function App() {
  return(
    <div>
      <Header
        titulo = "Mi primera app con React + Vite"
        subtitulo = "Probando el paso de propiedad (props) en tiempo real"
        totalItems = {1}
      />
    </div>
  );
}


//EJEMPLO 2
import React from 'react'
import UserCard from './components/UserCard'

export default function App(){
    return(
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h1>Lista de Desarrolladores</h1>
            <UserCard name="Cesar Labajos" email=" 23221019@unamad.edu.pe"
            compania=" UNAMAD" />
            <UserCard name="Xueli" email=" xueli@unamad.edu.pe"
            compania=" UNAMAD" />
        </div>
    )
}

//EJERCICIO 1
//USO DEL USESTATE
import React from 'react'
import { Contador } from './components/contador'

const App = () => {
    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h1>Contador</h1>
            <hr />
            <Contador/>
        </div>
    )
}

export default App


//EJERCICIO 2
import React from 'react'
import { Interruptor } from './components/luzAlternable'

const App = () => {
  return (
    <div style={{padding: '15px', margin: '10px'}}>
      <h3>Interruptor</h3>
      <Interruptor />
    </div>
  )
}

export default App;

*/
//EJEMPLO 3
import React from 'react'
import { ListaTareas } from './components/listas'

const App = () => {
  return (
    <div>
      <h2>Lista de tarea</h2>
      <ListaTareas />
    </div>
  )
}

export default App

/*
//EJERCICIO 4
import React from 'react'
import { BuscarProductos } from './components/buscador'

const App = () => {
  return (
    <div>
      <BuscarProductos />
    </div>
  )
}

export default App


//EJERCICIO 5
import React from 'react'
import { ListarUsuarios } from './components/consumoApi'

const App = () => {
  return (
    <div>
      <ListarUsuarios />
    </div>
  )
}

export default App


//EJERCICIO 6
import React from 'react'
import { DashboardClima } from './components/dashBoard'

const App = () => {
  return (
    <div>
      <DashboardClima />
    </div>
  )
}

export default App
*/