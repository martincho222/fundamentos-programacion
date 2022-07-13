// alert("hola mundo aksjdhakjdshakjsdhasd");

// variables: es un  espacio en memoria para guardar información

// scope
var nombre = "juan"; // declarar una variable global que pueden acceder a su valor y modificar su valor en cualquier parte de la aplicación

let apellido = "perez"; // declarar una variable local que solo puede ser accedida por la función o bloque en la que se declaró

const edad = 30; //es un valor constante, inmutable


// tipos de datos

// Strings
let variableString = 'esto es un string' + " esto es otro string";

console.log(variableString)

//Number

const numero1 = 10;
const numero2 = 10;

//Boleans
const verdadero = true;
const falso = false;

//Nulls
const nulo = null;

//undefined

let variableUndefined;

//Arrays
const array = [1,"hola", 3, true, undefined];

//objetos

let auto = {
    marca: "ford",
    modelo: "mustang",
    año: "2020",
    color: "negro"
}

// operadores

//Aritmeticos

let suma = numero1 + numero2;
let resta = numero2 - numero1;
let multiplicacion = numero1 * numero2;
let division = numero2 / numero1;
let resto = numero1 % numero2;
// console.log(resto);

// operadores unitarios
// ++
// --

// operadores relacionales
const numero3 = 10;
const numero4 = "10";
// console.log(numero3 === numero4);
// console.log( numero3 >= numero4);
// console.log( numero3 <= numero4);
// console.log( numero3 !== numero4);

// negacion
const verdadero1 = false;

console.log(!verdadero1);


// prompt es un metodo que nos permite solicitar al usuario un dato
// let firtsname = prompt("ingrese su nombre");
// let lastname = prompt("ingrese su apellido");

// console.log(`Hola, me llamo ${firtsname} ${lastname}`);

//Tarea
// Creamos tres variables: numero1, numero2, resultado
// mostramos por consola los resultados de las operaciones
// Sumamos dos números
// Restamos dos números
// multiplicamos dos números
// Dividimos dos npumeros
// comparamos si el numero 1 es mayor o igual que numero 2
// comparamos si numero 1 es distinto de numaro 2


//Tarea 2
/*
La Escuela Cafe de las 3am solicita un sistema, donde le permita a sus estudiantes presentarse de una manera mas interactiva y eficiente , por eso deciden acudir a un programador para crear un sistema, en el cual se podrá ingresar el nombre, edad, actividad favorita y deporte favorito en una tarjeta de presentación predeterminada.
 Monto ofrecido por el sistema: $2000 dolares
*/

