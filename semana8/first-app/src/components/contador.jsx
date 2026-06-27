import { useState } from 'react';

export function Contador(){
    const [contador, setContador] = useState(0);

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>
            <h3>Ejercicio 1: Contador</h3>
            <p>Valor Actual: <strong>{contador}</strong></p>
            <button onClick={() => setContador(contador + 1)}
            >Incrementar</button>
            <button onClick={() => setContador(contador - 1)} style=
            {{marginLeft: '10px'}}>Disminuir</button>
        </div>
    )
}