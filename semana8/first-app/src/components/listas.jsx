import { useState } from "react";

export function ListaTareas() {
    const [nuevaTarea, setNuevaTarea] = useState('');
    const [tareas, setTareas] = useState([]);

    // 2. Definimos la función para agregar tareas
    const agregarTarea = (e) => {
        e.preventDefault(); // Evita que la página se recargue

        if (nuevaTarea.trim() === '') return;

        const tareaNuevaObj = {
            id: Date.now(), // Usamos la fecha actual en milisegundos como ID temporal
            texto: nuevaTarea
        };

        setTareas([...tareas, tareaNuevaObj]);

        setNuevaTarea('');
    };

    return (
        <div style={{ padding: '20px', marginTop: '10px', border: '1px solid #ccc' }}>
            <h3>Lista de Tareas</h3>
            <form onSubmit={agregarTarea}>
                <input
                    type="text"
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                    placeholder="Nueva tarea..."
                />
                <button type='submit'>Agregar</button>
            </form>
            <ul>
                {tareas.map((tarea) => (
                    <li key={tarea.id}>{tarea.texto}</li>
                ))}
            </ul>
        </div>
    );
}