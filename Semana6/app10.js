let numero = 0;

console.log(numero || 100); //100
console.log(numero ?? 100); //0, el operador ?? no considera a 0 como 
// un valor nulo o indefinido, por lo que devuelve el valor de numero en lugar de 100.