//TP 10//

let nombre = "Juliana";
let apellido = "Diaz";

console.log (nombre + " " + apellido)

let num1 = 2;
let num2 = 3;
let num3 = 4;
let suma = (num1 + num2);

console.log (suma)

let suma2 = (suma + num3);

console.log (suma2)

//TP 11//

let topping = prompt ("Ingrese el topping");
let precioTopping;
let precioHelado = 500;
let montoFinal;

if (topping == "oreo") {
    precioTopping = 10;
    console.log ("Este topping es Oreo");

} else if (topping == "kitkat") {
    precioTopping = 15;
    console.log ("Este topping es kitkat");

} else if (topping == "kinder") {
    precioTopping = 25;
    console.log ("Este topping es kinder");

} else {
    precioTopping =0;
    console.log ("No tenemos este topping");}

montoFinal = precioHelado + precioTopping;

console.log ("El helado cuesta $", montoFinal);

