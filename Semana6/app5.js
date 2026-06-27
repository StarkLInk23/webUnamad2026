//suma
let monitor = 100;
let cpu = 90;
let memoria = 120;

let precioTotal = monitor + cpu + memoria;
console.log("El precio total es: " + precioTotal);

let adicionales = 50 + 30;
console.log("Adicionales: ", adicionales);

//resta
let descuento = 25;
let precioConDscto = precioTotal - descuento;
console.log("Precio con descuento: " + precioConDscto);

//dividir en cuotas
let cuotas = precioConDscto / 2;
console.log("Con cuotas es: ", cuotas);

//multiplicar
let totalPorTres = precioConDscto * 3;
console.log("Precio por tres unidades: ", totalPorTres);