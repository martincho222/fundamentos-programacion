// function Movies(titulo, sinopsis, director, reparto) {
//     this.titulo = titulo;
//     this.sinopsis = sinopsis;
//     this.director = director;
//     this.reparto = reparto;
// };

// crear una nueva instancia con la palabra reservada new
// let pelicula1 = new Movies("the avenger", "pelicula de marvel", "hermanos russo", "muchos actores");
// let pelicula2 = new Movies("jurasik Park", "pelicula de dinosaurios", "steven spilberg", "otros actores");
// console.log(pelicula1)
// console.log(pelicula2)

// Movies.prototype.listar = function() {
//     console.log("titulo", this.titulo);
//     console.log("director", this.director);
//     console.log("sinopsis", this.sinopsis);
//     console.log("reparto", this.reparto);
// }

// let peliculas = [];

// function createMovies() {
//     let contador = parseInt(prompt("Cuantas peliculas vas a cargar")); // 1,2,3,4,5,4,5...etc

//     if(!isNaN(contador) && contador > 0) {
//         for(let i = 0; i < contador; i++){
//             let titulo = prompt(`ingrese el titulo de la pelicula #${i+1}`);
//             let sinopsis = prompt("ingrese breve reseña");
//             let director = prompt("Ingrese el director");
//             let reparto = prompt("ingrese el nombre de los actores separados por comas");

//             if(!titulo || !sinopsis || !director || !reparto){
//                 console.error("faltaron datos necesarios");
//             } else {
//                 peliculas.push(new Movies(titulo, sinopsis, director, reparto))
//             }
//         }
//         for(let i = 0; i < peliculas.length; i++){
//             peliculas[i].listar()
//         }
//     }
// }

// createMovies()

// console.log(peliculas)


function Comida(nombre, esDulce, sinTac, esVeggie ) {
    this.nombre = nombre;
    this.esDulce = esDulce;
    this.sinTac = sinTac;
    this.esVeggie = esVeggie;
}

let chocolate = new Comida("chocolate", "si", true, "no");

const comidas = [];

function crearComida() {
    let contador = parseInt(prompt("Cuantas comidas vas a cargar"));
    if(!isNaN(contador) && contador > 0){
        for(let i = 0; i < contador; i++){
            let nombre = prompt("ingrese el nombre de la comida")
        let dulce = prompt("Si la comida es dulce ingrese si caso contrario no");
        let sinTac = prompt("si no tiene tac ingrese no caso contrario si");
        let tac = sinTac === "si" ? false : true;
        let veggie = prompt("si la comida es vegana ingrese si caso contrario no");
        if(!nombre || !dulce || !veggie || !sinTac){
            console.error("faltan datos para crear la comida");

        } else {
            comidas.push(new Comida(nombre, dulce, tac, veggie));
        }
        }
    }
}
crearComida()
console.log(comidas)







// this
// primer caso
// let yo = {
//     nombre: "martin",
//     edad: 36,
//     hablar: function() {
//         console.log(this.nombre)
//     }
// }
// yo.hablar()
// this hace referencia al objeto que contiene el metodo que invoca

// segundo caso
// let decirNombre = function(Mateo) {
//     Mateo.hablar = function(){
//         console.log(this.altura)
//     }
// }

// const Mateo = {
//     nombre: "Mateo",
//     edad: 28,
//     altura: "1,70"
// }
// const Naty = {
//     nombre: "Naty",
//     edad: 28,
//     altura: "1.68"
// }

// decirNombre(Mateo)
// decirNombre(Naty)
// Mateo.hablar()
// Naty.hablar()
// console.log("Mateo", Mateo)
// console.log("Naty", Naty)
// en este caso, el this hace referencia al objeto que se añade este metodo

// tercer caso
// let Persona = function(nombre, edad, madre) {
//     return {
//         nombre: nombre,
//         edad: edad,
//         hablar: function(){
//             console.log(this.nombre)
//         },
//         madre: {
//             nombre: madre,
//             hablar: function(){
//                 console.log(this.nombre)
//             }
//         }
//     }
// }

// const ana = Persona("Ana", 30, "Clara")
// console.log(ana)
// ana.hablar();
// ana.madre.hablar();

// DESTRUCTURING
// const arr = [1,2,3,4,5,6,7,8];
// const [primero, segundo, tercero, cuarto, ...rest] = arr;
// console.log(rest);

// const objeto = {
//     nombre: "Martin",
//     edad: 36,
//     titulo: "full stack"
// };

// const {nombre, edad, titulo} = objeto;

// console.log(nombre);
// console.log(edad);
// console.log(titulo);