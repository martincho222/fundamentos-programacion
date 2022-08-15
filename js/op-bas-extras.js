//1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

const mensaje = 'Hola Mundo desde un alert';
alert(mensaje);

//2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).

document.write('Hello World');

//3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

document.write(3 + 5);

//4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

const nombreUsuario = prompt('¿Cual es tu nombre?');
document.write(`Hola ${nombreUsuario}`);

//5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

const numero1 = parseInt(prompt('Ingresa un numero'));
const numero2 = parseInt(prompt('Ingresa otro numero'));
document.write(numero1 + numero2);


//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

const numero_1 = parseInt(prompt('Ingresa un numero'));
const numero_2 = parseInt(prompt('Ingresa otro numero'));
if (numero_1 > numero_2) {
    document.write(`El numero ${numero_1} es mayor que ${numero_2}`);
}
else {
    document.write(`El numero ${numero_2} es mayor que ${numero_1}`);
}

//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

const numeroM1 = parseInt(prompt('Ingresa un numero'));
const numeroM2 = parseInt(prompt('Ingresa otro numero'));
const numeroM3 = parseInt(prompt('Ingresa otro numero'));
if (numeroM1 > numeroM2 && numeroM1 > numeroM3) {
    document.write(`El numero ${numeroM1} es mayor que ${numeroM2} y ${numeroM3}`);
}
else if (numeroM2 > numeroM1 && numeroM2 > numeroM3) {
    document.write(`El numero ${numeroM2} es mayor que ${numeroM1} y ${numeroM3}`);
}
else {
    document.write(`El numero ${numeroM3} es mayor que ${numeroM1} y ${numeroM2}`);
}

//8.- Escribe un programa que pida un número y diga si es divisible por 2

const numeroDivisible = parseInt(prompt('Ingresa un numero'));
if (numeroDivisible % 2 == 0) {
    document.write(`El numero ${numeroDivisible} es divisible por 2`);
}
else {
    document.write(`El numero ${numeroDivisible} no es divisible por 2`);
}

//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen

const frase = prompt('Ingresa una frase');
const vocales = ['a', 'e', 'i', 'o', 'u'];
let contador = 0;
for (let i = 0; i < frase.length; i++) {
    for (let j = 0; j < vocales.length; j++) {
        if (frase[i] == vocales[j]) {
            contador++;
        }
    }
}
document.write(`La frase ${frase} tiene ${contador} vocales`);

//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

const numeroDivisibleD = parseInt(prompt('Ingresa un numero'));
if (numeroDivisibleD % 2 == 0) {
    document.write(`El numero ${numeroDivisibleD} es divisible por 2`);
}
if (numeroDivisibleD % 3 == 0) {
    document.write(`El numero ${numeroDivisibleD} es divisible por 3`);
}
if (numeroDivisibleD % 5 == 0) {
    document.write(`El numero ${numeroDivisibleD} es divisible por 5`);
}
if (numeroDivisibleD % 7 == 0) {
    document.write(`El numero ${numeroDivisibleD} es divisible por 7`);
}
else {
    document.write(`El numero ${numeroDivisibleD} no es divisible por 2, 3, 5 o 7`);
}




