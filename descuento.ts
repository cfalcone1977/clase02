import * as readlineSync from "readline-sync";
let precio:number;
let descuento:number;
let precioF:number;
descuento=10;
console.log("--------------------------------------");
precio = readlineSync.questionFloat("Ingrese el valor del producto: ");
console.log("--------------------------------------");
precioF = precio - ((precio / 100) * descuento);
console.log("\n\n");
console.log("------------------------------------------------------------");
console.log(`El precio final con ${descuento}% de descuento es: ${precioF}`);
console.log("------------------------------------------------------------");


