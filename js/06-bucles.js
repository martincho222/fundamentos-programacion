// WHILE
// ESTRUCTURA
// WHILE(){

// }

// let number = 10;
// let totalSuma = 0

// while( number > 0) {
//     totalSuma += 1
//     number -= 1
//     console.log("imprimir cantidad de veces de acuerdo a la concicion del while")
// }

// let respuesta = "HELSINKI";
// let acierto = false;
// let contador = 0;

// while(contador < 3 && acierto === false) {
//     let respuestaUsuario = prompt("Ingrese la capital de Finlandia");

//     if(respuestaUsuario.toUpperCase() === respuesta) {
//         acierto = true;
//         document.write("muy bien acertaste!!")
//     }
//     contador++;

// }
// if( acierto === false) {
//     document.write("Lo sentimos, has consumido tus 3 intentos")
// }

// DO WHILE

//ESTRUCTURA
// do{

// } while()

// do {
//     let respuestaUsuario = prompt("Ingrese la capital de Finlandia");

//     if(respuestaUsuario.toUpperCase() === respuesta) {
//         acierto = true;
//         document.write("muy bien acertaste!!")
//     }
//     contador++;
//     // if( acierto === false) {
//     //         document.write("Lo sentimos, has consumido tus 3 intentos")
//     //     }
// } while(contador < 3 && acierto === false)

// let numero = 0;
// let turnos = 0;

// while(turnos < 15) {
//     document.write(`<h1>${numero += 1}</h1>`);
//     turnos += 1
// }

// FOR

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
// }

// let a = 2;

// for (let i = 0; i <= a; i++) {
//     console.log(i);
//     console.log(a);
// }

// let numero, suma, resta, multiplicacion, division;
// let suma;
// let resta;
// let multiplicacion;
// let division;
// console.log(numero)

// let resultado = 0;

// for(let i = 0; i < 5; i++ ) {
//     let valor = prompt("ingrese un numero");
//     resultado = resultado  + parseInt(valor)
//     console.log(resultado)
// }

// let tabla = parseInt(prompt("ingrese el numero de la tabla a calcular"));

// if(isNaN(tabla)) {
//     console.error("Debe ingresar un valor entero");
//     document.write("<mark>Debe ingresar un valor entero</mark>")
// } else {
//     for (let i = 1; i <= 50; i++) {
//         // console.log(`${tabla} x ${i} = ${i * tabla}`);
//         document.write(`<b>${tabla} x ${i}</b> = ${i * tabla}<br>`);
//     }
// }