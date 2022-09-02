// JSON (acrónimo de JavaScript Object Notation, 'notación de objeto de JavaScript') es un formato de texto sencillo para el intercambio de datos. Se trata de un subconjunto de la notación literal de objetos de JavaScript, aunque, debido a su amplia adopción como alternativa a XML, se considera un formato independiente del lenguaje. 

// SI SE ACEPTAN
// {}
// []
// String
// Number
// Boolean
// null

// NO SE ACEPTAN
// function
// undefined
// 0

// SINTAXIS

// const sintaxisJSON = {
//     nombre: "Martin",
//     apellido: "Jerez",
//     edad: 36,
//     fullStack: true
// };

const arrJSON = [
    {
        departamento:8,
        nombredepto:"Ventas",
        director: "Juan Rodríguez",
        empleados:[
          {
            nombre:"Pedro",
            apellido:"Fernández"
          },{
            nombre:"Jacinto",
            apellido:"Benavente"
          } 
        ]
      }
]

// DE OBJETO O ARRAY A UNA CADENA JSON
let mostrarJSON = document.querySelector("#view-json");
const usuario = {
    'id': "012345888",
    'username': "carlosrivera",
    'password': "fkldfn4r09330adafnanf9843fbcdkjdkks",
    'data': {
       "name": "Carlos Rivera",
       "email": "example@gmail.com",
       "city": "Tucumán",
       "country": "ARG"
     }
   };
const jsonString = JSON.stringify(usuario);
mostrarJSON.innerHTML = jsonString
console.log(jsonString)

// CONVERTIR UNA CADENA JSON A UN OBJETO DE JAVASCRIPT
// const toObject = JSON.parse(jsonString);
// arrJSON.forEach((elemento) => {
//     return mostrarJSON.innerHTML = `<ul>
//     <li>${elemento.departamento}</li>
//     <li>${elemento.nombredepto}</li>
//     <li>${elemento.director}</li>
//     <li>${elemento.empleados[0].nombre}</li>
//     <li>${elemento.empleados[0].apellido}</li>
//  </ul>`
// });

// console.log(toObject)

/*
=================================================================================
                                    WEB STORAGE
=================================================================================
*/
/*
La API de almacenamiento web proporciona los mecanismos mediante los cuales el navegador puede almacenar información de tipo clave/valor
*/

// localStorage y sessionStorage

// GUARDAR DATOS EN LOCAL STORAGE O SESSION STORAGE setItem(clave, valor)
localStorage.setItem("nombre", "Martin");
localStorage.setItem("apellido", "Jerez")

// TRAER DICHA INFORMACION PARA MOSTRARLA getItem(clave)
console.log(localStorage.getItem("nombre"))
console.log(sessionStorage.getItem("apellido"))

// SI QUIERO BORRAR LA INFORMACION ALMACENADA 
// clear() borramos toda la informacion guardada en localstorage o sessionstorage
// removeItem(clave) eliminamos solamente la clave que le estamos pasando como parametro

// sessionStorage.clear()
// localStorage.clear()
// localStorage.removeItem("nombre");
// sessionStorage.removeItem);

// SI QUIERO SABER LA CANTIDAD DE KEYS O CLAVES GUARDADAS EN LOCAL O SESSION STORAGE
console.log(localStorage.length)