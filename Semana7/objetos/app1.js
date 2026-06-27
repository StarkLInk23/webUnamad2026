//Ejemplo 1 : 
const estudiante = {
    nombre: "Juan",
    edad: 20,
    carrera: "Ingeniería en Sistemas"
};

console.log(estudiante.nombre);
console.log(estudiante["edad"]);

//Ejemplo 2
const producto = {
    nombre: "Laptop",
    precio: 2500
};
//antes
console.log(producto);
//después
producto.precio = 3500;
console.log(producto);

//Ejemplo 3 : Métodos dentro de objetos
const persona = {
    nombre: "Ana",

    saludar() {

        return `Hola soy ${this.nombre}`;
    }
};

console.log(persona.saludar());

//Ejemplo 4 : Métodos dinámicos y contexto de this
const cuentaBancaria = {
    titular: "Carlos",
    saldo: 1500,

    depositar(monto) {
        this.saldo += monto;
        return `Depósito exitoso. Nuevo saldo S/: ${this.saldo}`;
    },

    retirar(monto) {
        if (monto > this.saldo) {
            return "Fondos insuficientes";
        }
        this.saldo -= monto;
        return `Retiro exitoso. Saldo restante S/: ${this.saldo}`;
    }
};

console.log(cuentaBancaria.depositar(1000));
console.log(cuentaBancaria.retirar(500));


//DESTRUCTURACIÓN DE OBJETOS
//ejemplo 1
const persona1 = {
    nombre1: "Laura",
    edad1: 25
};
//antes
console.log(persona1);
//después
const { nombre1, edad1 } = persona1;
console.log(`El nombre es: ${nombre1}`);
console.log(`La edad es: ${edad1}`);

//ejemplo 2
//Renombrar variables
const usuario = {
    nombre2: "Cesar",
    correo: "23221019@unamad.edu.pe"
};

const {
    nombre2: nombreUsuario,
    correo: email
} = usuario;

console.log(nombreUsuario);
console.log(email);

//ejemplo 3
//Desestructuración anidada y en parámetros de funciones
const factura = {
    id: "FAC-402",
    cliente: {
        datosPersonales: { nombreCliente: "Sofia", RUC: "20567890123" },
        direccion: "Av. Universitaria 742"
    },

    items: [
        { producto: "Laptop", precio: 1200 }
    ]
};
//desestructuración profunda en los argumentos de la función
function procesarEnvio({ cliente: { datosPersonales: { nombreCliente }, direccion } }) {
    return `Procesando envío para ${nombreCliente} a la dirección: ${direccion}`;
}

console.log(procesarEnvio(factura));

//SPREAD OPERATOR

//ejemplo 1
const frutas = ["manzana", "plátano"];
const citricos = ["naranja", "limón"];

//Combinar ambos arreglos sin modificar los originales
const todasLasFrutas = [...frutas, ...citricos, "fresa"];
console.log(todasLasFrutas);

//ejemplo 2
const estadoOriginal = {
    nombre: "Alberto",
    autenticacion: false,
    tema: "oscuro"
};

//Crear un nuevo estado con autenticación actualizada sin modificar el original
const nuevoEstado = {
    ...estadoOriginal,
    autenticacion: true, //cambiamos el estado de autenticación
    ultimoAcceso: new Date() //agregamos una nueva propiedad
};
console.log("Original:", estadoOriginal);
console.log("Modificado:", nuevoEstado);


//Asincronía

//CALLBACKS
//ejemplo 1
function consultarBaseDatos(id, callback) {
    setTimeout(() => {
        const usuario = { id, nombre: "Julio" };
        callback(usuario);
    }, 3000);
}

consultarBaseDatos(5, (datos) => {
    console.log("Usuario cargado:", `${datos.nombre}`);
});

//ejemplo 2
function consultarBasedeDatos1(query, callback) {
    setTimeout(() => {
        if (query === "") {
            callback(new Error("Error: Query vacía"), null);
        } else {
            callback(null, { id: 1, resultado: "Fila encontrada" });
        }
    }, 1500);
}

consultarBasedeDatos1("", (err, data) => {
    if (err) {
        console.error(`Error de DB: ${err.message}`);
        return;
    }
    console.log("Datos obtenidos:", data);
});

//PROMESAS
//ejemplo 1
const promesa = new Promise((resolve, reject) => {
    resolve("¡Operación exitosa!");
});

promesa.then( resultado => {
    console.log(resultado);
});

//ejemplo 2
const verificarStockTienda = (cantdadSolicitada) => {
    return new Promise((resolve, reject) => {
        const stockActual = 10;
        if (cantdadSolicitada <= stockActual) {
            resolve("Stock disponible, Procediendo al despacho...");
        } else {
            reject("Error : No hay stock suficiente en el almacén.");
        }
    });
};

verificarStockTienda(5)
    .then(respuesta => console.log(respuesta))
    .catch(error => console.error(error))
    .finally(() => console.log("Proceso de verificación de stock finalizado."));


//ASYNC/AWAIT
//ejemplo 1
const obtenerClima = () => new Promise(res => setTimeout(() => res("Clima, 25°C"), 100));

async function mostrarDashboard() {
    console.log("Cargando datos del clima ...");
    const clima = await obtenerClima(); //esper de manera no bloqueante
    console.log(`El clima de hoy es: ${clima}`);
}
mostrarDashboard();