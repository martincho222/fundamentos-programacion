// let auto = {
//     color: "rojo",
//     marca: "Toyota",
//     modelo:"Etios",
//     anio: 2017,
//     encendido: false,
//     arrays:[],
//     isNull: null,
//     isUndefined: undefined,
//     encenderApagar: function(){
//         this.encendido = !this.encendido
//         if(this.encendido){
//             alert("el Vehiculo esta encendido");
//         } else {
//             alert("el vehiculo esta apagado");
//         }
//     },
//     objecto: {}
// };
// console.log(auto.encenderApagar())


// console.log(auto.color)
// console.log(auto.marca)
// console.log(auto.modelo)
// console.log(auto["color"]);

// agregar propiedades a un objeto
// auto.tipo = "sedan";
// auto.limpiarParabrisas = function(){
//     return console.log("esta encendido el limpia parabrisas")
// };

// puedo modificar una propiedad en un objeto
// auto.color = "gris";

// eliminar propiedades de un objetos
// delete auto.objecto;

// console.log(auto);

// for (const key in auto) {
//    console.log(`${key}: ${auto[key]}`)
// }

let alumnos = [
    {nombre: "Clemente", edad: 22},
    {nombre: "Constanza", edad: 24},
    {nombre: "Sra Tutora", edad: "35"}
];

// alumnos.forEach(function(alumno){
//     return console.log(`Hola Soy ${alumno.nombre} y tengo ${alumno.edad} años`)
// })

for(let i = 0; i < alumnos.length; i++){
    console.log(`Nombre: ${alumnos[i].nombre} - edad: ${alumnos[i].edad}`);
}
