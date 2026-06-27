//Ejemplo 1
/*fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => 
        console.log(data)
    );
*/
//Ejemplo 2
/*
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(usuario =>
        console.log(usuario)
    );
*/
//Ejemplo 3
/*
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(usuario => {
        document.getElementById("nombre").textContent = usuario.name;
    });
*/
//Ejemplo 4
/*
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });


//Ejemplo 5
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        const lista = document.getElementById("lista");
        users.forEach(user => {
            lista.innerHTML += `<li>${user.name}</li>`;
        });
    });


//Ejemplo 6
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        let tabla = `
                <table border="1">
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            `;
            users.forEach(user => {
                tabla += `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                    </tr>
                `;
            });

            tabla += `</table>`;
                document.body.innerHTML += tabla;
    });




//Ejemplo 1 Try Catch
async function obtenerData() {
    try {

        const respuesta = await fetch("https://jsonplaceholder.typicode.com/invalid");
        if (!respuesta.ok) {
            throw new Error(`HTTP: ${respuesta.status}`);
        }
        const data = await respuesta.json();
        console.log(data);

    } catch (error) {

        console.error("No se pudo cargar el recurso:", error.message);
    }
}
console.log(obtenerData());


//Ejemplo 2

class HttpError extends Error{

    constructor(status,statusText){
        super(`HTTP ${status}: ${statusText}`);
        this.status = status;
    }
}

async function obtenerUsuario(id) {

    if(typeof id != 'number' || id <= 0) {
        throw new TypeError('ID deber ser un numero positivo');
    }
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if(!res.ok) throw new HttpError(res.status, res.statusText);
        const data = await res.json();
        return data;
    }catch (error) {

        if(error instanceof HttpError){
            console.error(`Error del servidor: ${error.message}`);
        }else if (error instanceof SyntaxError){
            console.error(`Respuesta con JSON invalido`);
        }else {
            console.error(`Error de red:`, error.message);
        }
        throw error;
    }
    
};

//PRIMERA FORMA DE OBTENER DATOS DEL USUARIO
(async () =>{
    try{
        const usuario = await obtenerUsuario(1);
        console.log('Usuario obtenido:', usuario);
    }catch (error){
        console.log('No se pudo completar la operacion:', error.message);
    }

})();

//SEGUNDA FORMA DE OBTENER LOS DATOS DEL USUARIO
obtenerUsuario(5).then(usuario => console.log(usuario));   

//falta 3

*/
//Ejemplo 4

const URL = "https://6a305911a7f8866418d5ee08.mockapi.io/productos";

async function productos() {
    try{
        const respuesta = await fetch(URL);
        if(!respuesta.ok){
            throw new Error(`Error HTTP: ${respuesta.status} - ${respuesta.statusText}`);

        }
        try{
            const productos = await respuesta.json();
            console.log("Lista de productos obtenida con éxito:", productos);
            return productos;
        }catch(errorJson){
            console.error("Error: la respuesta del servidor no es un JSON valido.", errorJson);
            throw new Error("No se pudo procesar la respuesta del servidor.");
        }
    }catch(errorRed){
        console.error("Error de red o de solicitud:", errorRed.message);
    }
    
}
productos();
