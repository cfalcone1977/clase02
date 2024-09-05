import * as readlineSync from "readline-sync";
let base:number;
let altura:number;
let area:number;
console.log("-------------------Calculo Area Triángulo---------------------------");
base = readlineSync.questionFloat("Ingrese el valor de la base: ");
altura = readlineSync.questionFloat("Ingrese el valor de la altura: ");
console.log("--------------------------------------------------------------------");
console.log("--------------------------------------------------------------------");
area = (base * altura)/2;
console.log(`--El area del triangulo de ${base} de base y de ${altura} de altura es: ${area}--`);

