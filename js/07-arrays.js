// ARRAYS

// const alumnos = ["Conti", "Agus", "Carlos", "Lucia", "Lucia", "Lucases"];
// const arrayVacio = [];
// console.log(array[]);

// for(let i = 0; i < alumnos.length; i++){
//     // console.log(alumnos[i]);
//     arrayVacio.push(alumnos[i]);
// }
// console.log(arrayVacio);
// console.log(alumnos)
// //Añadir un elemento al final del array
// alumnos.push("Darien");

// //Eliminar último elemento del array
// alumnos.pop();

//Añadir un elemento al principio
// alumnos.unshift("Darien");

//Eliminar el primer elemento de un array
// alumnos.shift();

//Encontrar el indice de un elemento del array
// alumnos.indexOf("Lucia");
// console.log(alumnos.indexOf("Lucia"))

//Eliminar un único elemento mediante su posición
// let posición = 1;
// alumnos.splice(posición, 2);

//Eliminar varios elementos a partir de una posición
// alumnos.splice(0, 2);

//reemplazar valores
// alumnos.splice(2, 2, "Darien", "Daniel");

//Concatenar dos array
// const alumnos1 = ["Darien", "Daniel"];
// console.log(alumnos.concat(alumnos1))

//Determinar si un array contiene un valor buscado
// console.log(alumnos.includes("Seba"));

// Invertir el orden del Arreglo
// alumnos.reverse();

//Ordenar elementos de un array
// alumnos.sort();

//Concatena en un string todos los elementos de un array.

// console.log(alumnos.join("-"));

//Extrae una porción del array sobre el que se llama y devuelve un nuevo array.
// console.log(alumnos.slice(1, 3));

// let interrogante = ["🥚", "🐔"].sort();
// console.log(interrogante);


// console.log(alumnos);

// const arrayLucaces = ["Lucas Obejeros", "Lucas Araoz", "Lucas Luna"];

// METODO MAP
// es un metodo que devuelve un nuevo array con la condicion realizada dentro del callback
// console.log(arrayLucaces.map((luca) => {
//     if(luca.includes("Lucas Obejeros")){
//         return luca.toUpperCase();
//     }
//     return luca;
// }))

// // forEach
// console.log(arrayLucaces.forEach(function(luca) {
//     console.log(luca)
//     // if(luca.includes("Lucas Luna")){
//     //     return luca
//     // }
// }))

// metodo find
// const numbers = [1,2,3,67,34,200,15, 14];

// const findNumber = numbers.find(function(number){
//     return number > 10
// });

// console.log(findNumber)

// filter
// const palabras = ["hola", "rolling", "pikachu", "bariloche", "milanesa", "sambuchito", "canelones", "aaaaaaaaaaaaa"];

// const resultado = palabras.filter(function(palabra){
//     return palabra.length > 8
// });

// console.log(resultado);

/*
1- Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/

let ciudades = [];

let ciudad = prompt('Ingrese el nombre de una ciudad');

while(ciudad !== null && ciudad !== '0'){
    if(ciudad !== ""){
        ciudades.push(ciudad)
    }
    ciudad = prompt('Ingrese el nombre de una ciudad');

}
console.log(ciudades)
console.log(`Cantidad de elementos en el arreglo: ${ciudades.length}`);

// primera posicion 0
// tercera posicion 2
// ultima posicion ciudades.length - 1
document.write(`1- ${ciudades[0]}<br>`);
document.write(`3- ${ciudades[2]}<br>`);
document.write(`ultima- ${ciudades[ciudades.length - 1]}<br>`);

// añadar Paris a la ultima posicion
ciudades.push("París");

document.write(`${ciudades[1]} ocupa la segunda posicion en el arreglo<br>`);

ciudades.splice(1,1, "Barcelona");