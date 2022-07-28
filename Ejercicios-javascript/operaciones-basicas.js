//1- Escribir un programa que muestre un prompt donde el usuario 
//ingresa un número, luego muestra otro prompt pidiendo otro número, 
//finalmente el programa muestra una alerta con el resultado de la suma.

let num1 = parseInt(prompt("ingrese un numero"));
let num2 = parseInt(prompt("ingrese otro numero"));
let suma = `La suma de ${num1} + ${num2} es igual a ${num1 + num2}`;

alert(suma);

// 2- Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius 
// y el programa muestre en una alerta la temperatura en Fahrenheit.

let tempCelcius = parseInt(prompt("ingrese temperatura en Celcius"));
let tempFahrenheit = 32 + (tempCelcius*1.8);
let alertTemp = `${tempCelcius}° Celcius son ${tempFahrenheit}° Fahrenheit`;

alert(alertTemp);

// 3- Pedir un número a un usuario a través de un prompt
//  y luego dividirlo por 10, ejemplo: 5 / 10 igual 0.5


let divisor = parseInt(prompt("ingrese un numero a dividir"));
const dividendo = 10;

let division = parseFloat(divisor/dividendo);


alert(`La division es ${division}`);