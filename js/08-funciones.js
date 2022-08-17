//Funciones son tareas

// Las funciones son uno de los bloques de construcción fundamentales en JavaScript. Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida. Para usar una función, debes definirla en algún lugar del ámbito desde el que deseas llamarla.

// En programación, cuando nuestro código se va haciendo cada vez más grande, necesitaremos buscar una forma de organizarlo y prepararnos para reutilizarlo y no repetir innecesariamente las mismas tareas. Para ello, un primer recurso muy útil son las funciones.

// Las funciones nos permiten agrupar líneas de código en tareas con un nombre, para que, posteriormente, podamos hacer referencia a ese nombre para realizar todo lo que se agrupe en dicha tarea. Para usar funciones hay que hacer 2 cosas:

// Declarar la función: Preparar la función, darle un nombre y decirle las tareas que realizará.
// Ejecutar la función: «Llamar» a la función para que realice las tareas de su contenido.

// FUNCIONES DECLARATIVAS


// function suma(a, b, ...args) {
//     console.log(args)
//     const total = a + b;
//     return total;
// }
// console.log(suma(30, 80, 50, 80));

// calculadora
// function calculadora(num1, num2, operacion) {
//     if(!num1 || !num2) {
//         return "falta el valor"
//     }
//     switch (operacion) {
//         case "+":
//             return console.log(num1 + num2)
//         case "*":
//             return console.log(num1 * num2)
//         case "-":
//             return console.log(num1 - num2)
//         case "/":
//             return console.log(num1 / num2)
//         default:
//             return "operacion invalida"
//     }
// };

// calculadora(2, 0, "/");


// FUNCIONES ANONIMAS O DE EXPRESION
// const algo = function() {
//     return console.log("esto es una funcion anonima")
// }

// algo();

// const fecha = function() {
//     return new Date().getMinutes();
// }
// console.log(fecha())

// Arrow functions
// const newDate = () => {
//     return new Date();
// }
// console.log(newDate());

// callbacks
// son funciones que se pasan como parametro o argumento a otra y se ejecutan dentro del cuerpo de la funcion que la esta recibiendo

// const saludo = function() {
//     return console.log("hola")
// }

// const generarSaludo = (callback) => {
//     return callback();
// }

// generarSaludo(saludo)

// const callback = function(a, b) {
//     return console.log(a+b);
// }


// const generarSumas = function(callback) { 
//     const a = 10;
//     const b = 20;
//     return callback(a, b);
// }

// generarSumas(callback);

// SECUENCIA FIBONACCI
// 0, 1, 1, 2, 3, 5, 8......  

// function fibonacchi(num) {
//     let fibo = [0, 1];
//     for(let i = 2; i < num; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }

//     return console.log(fibo)
// }

// fibonacchi(50)


// funciones de tiempo
// setTimeout

// setTimeout(function(){
//     console.log("hola")
// }, 5000);
// console.log("Hola mundo")

// setInterval

// const intervalo = setInterval(function(){
//     console.log("Hola a todos")
// }, 1000);

// setTimeout(function(){
//     clearInterval(intervalo);
// } , 5000);

// setInterval(() => {
//     console.log(new Date().getSeconds())
// }, 1000);

// const test = 1;
// function isThis(test) {
//     console.log(this.console.log(test));
// }

// isThis(test);


// Caso 1

// En el primer caso this está siendo invocado dentro de un método.
// let yo = {
//     nombre:"yeison",
//     edad: 22,
//     hablar: function () {
//       console.log(this.nombre);
//     }
//   };
  
//   yo.hablar();
// this, hace referencia al objeto, que contiene el método donde se invoca.

// caso 2

// En este caso, existe una función que recibe un objeto como parámetro, y le agrega el método hablar, luego, se ejecuta la función sobre dos objetos.

// let decirNombre = function(obj) {
//     obj.hablar = function() {
//     console.log(this.nombre);
//     };
//   };
  
//   const Mateo = {
//     nombre: "Mateo",
//     edad: 22
//   };
  
//   const juan = {
//     nombre: "Juan",
//     edad: 25
//   };
  
//   decirNombre(juan);
//   decirNombre(Mateo);
  
//   juan.hablar(); // Juan
//   Mateo.hablar(); // Mateo

// This en este caso hace referencia al objeto que se añade este método.

// Caso 3

// En este caso tenemos una función que retorna un objeto, que contiene un método hablar, que invoca this.

// let Persona = function (nombre, edad, madre) {
//     return {
//       nombre: nombre,
//       edad: edad,
//       hablar: function() {
//         console.log(this.nombre);
//       },
//       madre: {
//         nombre: madre,
//         hablar: function() {
//           console.log(this.nombre);
//         }
//       }
//     };
//   };
  
//   const ana = Persona("Ana", 30, "Clara");
  
//   ana.hablar(); // Ana
//   ana.madre.hablar(); // Clara

// const executeSweetAlert = () => {
//     Swal.fire('Any fool can use a computer')
// }