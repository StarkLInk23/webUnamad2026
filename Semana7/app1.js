//METODO MAP()
//ejemplo 1
const numeros = [4, 6, 8];
const dobles = numeros.map(n => n * 2);
console.log(dobles);

//ejemplo 2
const precios = [50, 100, 150];
const igv = precios.map(p => p * 1.18);
console.log(igv);

//ejemplo 3
let storeTechProducts = [
    { nombre: "Iphone 20", precio: 4500 },
    { nombre: "Samsung Galaxy S45", precio: 3800 },
    { nombre: "MackBook PRO 2027", precio: 7500 },
    { nombre: "PlayStation", precio: 1500 },
    { nombre: "Xbox Series Xa", precio: 850 },
    { nombre: "Canon EOS R5", precio: 4200 },
    { nombre: "Sony A14", precio: 1200 },
    { nombre: "DJI Mavic Air 2", precio: 800 },
    { nombre: "Samsung QLED", precio: 2350 },
    { nombre: "Bose QuietComfort", precio: 420 }
];

let prodIncrementadoPrecio = storeTechProducts.map((prepProd) => {
    let precioFinal = prepProd.precio * 1.20;
    return precioFinal;
})

console.log("Los precios finales son:", prodIncrementadoPrecio);

//METODO FILTER()
//ejemplo 1
const edades = [15, 18, 20, 12];
const mayores = edades.filter(e => e >= 18);
console.log(mayores);

//ejemplo 2
const productos = [
    { nombre: "Laptop", stock: 12 },
    { nombre: "Mouse", stock: 0 },
    { nombre: "Teclado", stock: 2 }
];

const disponibles = productos.filter(p => p.stock > 0);
console.log(disponibles);

//ejemplo 3
let products = [
    { nombre: "Iphone 20", precio: 4500 },
    { nombre: "Samsung Galaxy S45", precio: 3800 },
    { nombre: "MackBook PRO 2027", precio: 7500 },
    { nombre: "PlayStation", precio: 1500 },
    { nombre: "Xbox Series Xa", precio: 850 },
    { nombre: "Canon EOS R5", precio: 4200 },
    { nombre: "Sony A14", precio: 1200 },
    { nombre: "DJI Mavic Air 2", precio: 800 },
    { nombre: "Samsung QLED", precio: 2350 },
    { nombre: "Bose QuietComfort", precio: 420 }
];

let prodPrecioFilter = products.filter((prepProd) => {
    return prepProd.precio > 800;
});

console.log("Los productos con precio mayor a 800 son:", prodPrecioFilter);

//METODO REDUCE()
//ejemplo 1
const numeros1 = [2, 4, 6, 8, 10];
const suma = numeros1.reduce((acum, n) => acum + n, 0);
console.log(suma);

//ejemplo 2
const ventas = [100, 200, 300];
const total = ventas.reduce((acc, v) => acc + v, 0);
console.log(total);

//ejemplo 3
let products1 = [
    { nombre: "Iphone 20", precio: 4500 },
    { nombre: "Samsung Galaxy S45", precio: 3800 },
    { nombre: "MackBook PRO 2027", precio: 7500 },
    { nombre: "PlayStation", precio: 1500 },
    { nombre: "Xbox Series Xa", precio: 850 },
    { nombre: "Canon EOS R5", precio: 4200 },
    { nombre: "Sony A14", precio: 1200 },
    { nombre: "DJI Mavic Air 2", precio: 800 },
    { nombre: "Samsung QLED", precio: 2350 },
    { nombre: "Bose QuietComfort", precio: 420 }
];

//suma
let prodPrecioSuma = products1.reduce((suma, prepProd) => {

    return suma + prepProd.precio;

}, 0);

console.log("La suma de los precios es:", prodPrecioSuma);

//promedio
let prodPrecioPromedio = products1.reduce((suma, prepProd) => {

    return suma + prepProd.precio / products1.length;

}, 0);

console.log("El promedio de los precios es:", prodPrecioPromedio);


//Metodo FIND()
//ejemplo 1
const edades1 = [12,15,22,20];
const resultado = edades1.find(e => e >= 18);
console.log(resultado);

//ejemplo 2
const usuarios = [
    { id: 1, nombre: "Denys" },
    { id: 2, nombre: "Alberto"},
    { id: 3, nombre: "Lucy"},
    { id: 4, nombre: "Frank"}
];

const usuario = usuarios.find(u => u.id === 2);
console.log(usuario);


//METODO SOME()
//ejemplo 1
const numeros2 = [1,3,5,8];
const existePar = numeros2.some(n => n % 2 === 0);
console.log(existePar);

//ejemplo 2
const alumnos = [
    { nombre: "Juan", aprobado: false },
    { nombre: "Victor", aprobado: false },
    { nombre: "Tomás", aprobado: true }
];

const existeAprobado = alumnos.some(a => a.aprobado);
console.log(existeAprobado);


