import * as readlineSync from "readline-sync";
//declaraciopn de variables
let base: number;
let altura: number;
let area: number;
//ingreso de datos usuario
console.log("   Calculo de Area rectangulo");
console.log("--------------------------------");
base = readlineSync.questionFloat("Ingrese el valor de la base: ");
altura = readlineSync.questionFloat("Ingrese el valor de la altura: ");
area = base * altura;
console.log(`\n \n El area de un rectangulo de ${base} x ${altura} es: ${area}`);


