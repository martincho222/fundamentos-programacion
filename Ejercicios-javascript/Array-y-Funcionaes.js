// 1- Crear un script que solicite al usuario mediante un prompt el nombre de ciudades 
//y almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor
// “0” se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

const ciudades = [];
let nombre;

do{
    nombre = prompt("ingrese el nombre de una ciudad ó 0(cero para salir)");
    ciudades.pop(nombre);

}while(nombre != "0")
console.log(ciudades);

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

// 2 - Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
// luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro es p = 2*(a +b)

// 3 - Escribir el código de una función a la que se pasa como parámetro un número entero y 
//devuelve como resultado una cadena de texto que indica si el número es par o impar.
// Mostrar por pantalla el resultado devuelto por la función.

// 4 - Definir una función que muestre información sobre una cadena de texto que se le pasa como 
//argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada 
//sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

// 5 - Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.
//random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados.
// Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, 
//repitiendo 50 veces esta operación.