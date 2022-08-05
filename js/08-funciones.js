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