// Arrays
// Dificultad:  🟢
// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año.
// Mostrar por pantalla en forma de lista  los doce nombres del arreglo.


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mazo', 'Junio', 'Julio',
               'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
document.write('Meses:')               
for(let i = 0; i<meses.length; i++){
    document.write(`<ul><li>${meses[i]}</li></ul>`)
}               
document.write(`<br>`);               

// Dificultad:  🟢🟡
// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y
//  almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado,
// luego realizar las siguientes acciones:


let ciudades = [];
let nombre;

while(true){    
    nombre = prompt("ingrese el nombre de una ciudad");
    if(nombre==null){
        break
    }else{
           
        ciudades.push(nombre);    
    }
    
}

if(ciudades.indexOf("0") || ciudades.indexOf(" ")){
    ciudades.pop();
}
console.log(ciudades);
// Mostrar la longitud del arreglo.
let longitud = ciudades.length
console.log(`ciudades : ${longitud}`);
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
let ultima =  ciudades.length -1;
document.write(`ciudades : <br> primera - ${ciudades[0]},<br> tercera - ${ciudades[2]},<br> y ultima - ${ciudades[ultima]}`)
document.write(`<br>`);
// Añade en última posición la ciudad de París.
ciudades.push("Paris"); 
// Escribe por pantalla el elemento que ocupa la segunda posición.
document.write(`Ciudad posicion 2 : ${ciudades[1]}`);
document.write(`<br>`);
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.


// Dificultad:  🟢🟡🔴

// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la 
// función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los
//  lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array 
// el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

function tirarDado(){

    let array_de_resultados = [];
    

    for(let i=0; i < 50; i++ ){

        let valorDadoUno = Math.floor(Math.random()*6)+1 ; // Math.floor toma sola la parte entera
                                                           // Math random un numero entre (0 y 1)    
        let valorDadoDos = Math.floor(Math.random()*6)+1 ;

        let resultado = valorDadoUno + valorDadoDos;
        array_de_resultados.push(resultado);

    }

    console.log(array_de_resultados);


}
tirarDado();



// Funciones
// Dificultad:  🟢
// 1- Escribir el código de una función a la que se pasa como parámetro un número entero y 
// devuelve como resultado una cadena de texto que indica si el número es par o impar. 
// Mostrar por pantalla el resultado devuelto por la función.


let numero = parseInt(prompt("ingrese un valor"));

devolverPar(numero);

function devolverPar(x){  

    if(x % 2 === 0){
        document.write(`El numero ${x} es par.`);
        document.write(`<br>`);
    }else if((x % 2) - 1 === 0){
        document.write(`El numero ${x} es impar.`);
        document.write(`<br>`);
    }else{
        alert(`ingrese un numero entero`);
    }
}

// Dificultad:  🟢🟡
// 2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
// A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
// sólo por minúsculas o por una mezcla de ambas.


let textocadena = prompt("ingrese un texto cualquiera");


esMayuscula(textocadena);

function esMayuscula(textotrim){

    let texto = textotrim.trim();

    if(texto.length > 0 || texto.typeof(String)){

        if(texto === texto.toUpperCase()){
            document.write(`El texto ${texto} tiene solo mayusculas.`);
            document.write(`<br>`);

        } else if(texto === texto.toLowerCase()){
            document.write(`El texto ${texto} tiene solo mayusculas.`);
            document.write(`<br>`);
        }else{
            document.write(`El texto ${texto} tiene minusculas y mayusculas.`);
            document.write(`<br>`);
        }
     

    }else{

        alert("ingrese texto.")

    }

    
}
// Dificultad:  🟢🟡
// 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
// luego crear una función para calcular su perímetro y mostrarlo por pantalla.
// La fórmula del perímetro  es p = 2*(a +b)
let base = parseFloat(prompt("ingrese medida de la base"));
let altura = parseFloat(prompt("ingrese medida de la altura"));

if(base > 0 && altura > 0){
    calcularPerimetro(base, altura);
}else{
    alert(`Solo se aceptan valores mayores de 0`);
}

function calcularPerimetro(x, y){

    document.write(`El perimetro es : ${ 2*x + 2*y }`);
    document.write(`<br>`);

}


// Dificultad:  🟢🟡
// 4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla,
//  la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al
//   10 del número elegido por el usuario.

let tabla = parseInt(prompt("Ingrese un numero entero"));

if(isNaN(tabla)) {
    console.error("Debe ingresar un numero entero");
    document.write("Debe ingresar un numero entero")
} else {
    document.write(`Tabla del ${tabla}`)
 for(let i=1; i <= 10; i++){
    console.log(`${tabla} x ${i} = ${i * tabla}`);
    document.write(`<b>${tabla} x ${i} = ${i * tabla}</b> <br>`);
 }   
}