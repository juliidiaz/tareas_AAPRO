//CLASE 10//

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

//CLASE 11 TP 1//

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

//CLASE 11 TP 2//

let pedido = prompt ("Ingrese el menu elegido");

switch (pedido) {
    case 'carne':
        console.log ("Ofrecer Vino Tinto");
    break;

    case 'pescado':
            console.log ("Ofrecer Vino Blanco");
    break;   
    
    case 'verdura':
        console.log ("Ofrecer Agua");
    break;

default:
    alert ("Elija carne pezcado o verdura para continuar");}

//CLASE 11 TP3//

let colores = ["rojo", "naranja", "amarillo"];

for (let i = 0; i < colores.length; i++) {
    console.log (colores[i]);}

    colores.push("verde");

for (let i = 0; i < colores.length; i++) {
    console.log (colores[i]);}

//CLASE 11 TP 4//

