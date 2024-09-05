import * as readlineSync from "readline-sync";
//declaraciopn de variables
let numb1: number;
let numb2: number;
let resultado: number;

console.log("Algoritmo para sumar dos numeros");
console.log("--------------------------------");
numb1 = readlineSync.questionFloat("Ingrese el primer numerando: ");
numb2 = readlineSync.questionFloat("Ingrese el segundo numerando: ");
//let numb1 = readlineSync.questionFloat("Ingrese el primer numerando: ");
//let numb2 = readlineSync.questionFloat("Ingrese el segundo numerando: ");
resultado = numb1 + numb2;
console.log(`\n \n El valor sumado de sumar ${numb1} y ${numb2} es: ${resultado}`);


