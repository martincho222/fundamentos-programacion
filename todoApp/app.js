// IIFE
// Immediately invoked function expression or IIFE
// Las expresiones de función ejecutadas inmediatamente (IIFE por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen.
/*
  Es un patrón de diseño también conocido cómo función autoejecutable (Self-Executing Anonymous Function (en-US) ) y se compone por dos partes. La primera es la función anónima con alcance léxico encerrado por el Operador de Agrupación (). Esto impide accesar variables fuera del IIFE, así cómo contaminar el alcance (scope) global.

  La segunda parte crea la expresión de función cuya ejecución es inmediata (), siendo interpretado directamente en el engine de JavaScript.
*/
/*
funcion anonima
(function(){
    return console.log("algo");
})()
// funcion flecha
(
    () => {
        console.log("me estoy auto ejecutando")
    }
)()
*/

// CRUD 
// CREATE // CREAR
// READ // LEER
// UPDATE // MODIFICAR
// DELETE // BORRAR

// ABM
// ALTA
// BAJA
// MODIFICACION

let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let datemsg = document.getElementById("dateMsg");
let textmsg = document.getElementById("textMsg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

const data = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
})

// crear una funcion para validar datos

let formValidation = () => {
    // si los campos vienen vacios, seteamos mensajes de error que faltan datos o todos son requeridos
    if(textInput.value === "" || dateInput.value === "" || textarea.value === ""){
        msg.innerHTML = "La tarea no puede estar en blanco";
        datemsg.innerHTML = "La fecha es requerida"
        textmsg.innerHTML = "Descripción es requerida"
    } else {
        msg.innerHTML = "";
        datemsg.innerHTML = "";
        textmsg.innerHTML = "";
        acceptData();
        add.setAttribute("data-bs-dismiss", "modal");
        add.click();
        (() => {
            add.setAttribute("data-bs-dismiss", "");
        })()
    }
};

const acceptData = () => {
    data.push({
        text: textInput.value,
        date: dateInput.value,
        description: textarea.value
    })
    localStorage.setItem("tasks", JSON.stringify(data));
    console.log(data)
}