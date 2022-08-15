//OPERACIONES BASICAS

//1- Escribir un programa que muestre un prompt donde el usuario ingresa un número, luego muestra otro prompt pidiendo otro número, finalmente el programa muestra una alerta con el resultado de la suma.

const numero1 = parseInt(prompt('Ingresa un numero'));
const numero2 = parseInt(prompt('Ingresa otro numero'));
document.write(numero1 + numero2);

//2- Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius y el programa muestre en una alerta la temperatura en Fahrenheit.

const temperaturaC = parseInt(prompt('Ingresa la temperatura en Celcius'));
const temperaturaF = temperaturaC * 1.8 + 32;
document.write(`${temperaturaC}°C son ${temperaturaF}°F`);

//3- Pedir un número a un usuario a través de un prompt y luego dividirlo por 10, ejemplo: 5 / 10 igual 0.5

const numero3 = parseInt(prompt('Ingresa un numero'));
const numero4 = numero3 / 10;
document.write(numero4);
