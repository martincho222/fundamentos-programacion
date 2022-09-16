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

let data = JSON.parse(localStorage.getItem("tasks")) || [];

function idRandom() {
    if (data.length > 0) {
      return data[data.length - 1].id + Math.round(Math.random() * 100);
    } else {
      return Math.round(Math.random() * 100);
    }
  }

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

// pushear los datos al arreglo y guardarlos en locaStorage
const acceptData = () => {
    data.push({
        id: idRandom(),
        text: textInput.value,
        date: dateInput.value,
        description: textarea.value
    })
    localStorage.setItem("tasks", JSON.stringify(data));
    console.log(data)
    createTasks()
}

// resetear formulario
const resetForm = () => {
    // form.reset()
    textInput.value = "";
    dateInput.value = "";
    textarea.value = "";
}

// mostrar o insertar tareas en el html
const createTasks = () => {
    tasks.innerHTML = "";
    data.map((task, idx) => {
        return tasks.innerHTML += `
            <div id=${idx}>
                <span class="fw-bold">${task.text}</span>
                <span class="small text-secondary">${task.date}</span>
                <p>${task.description}</p>
                <span class="options">
                    <i onclick="updateTask(${task.id})" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit" ></i>
                    <i onclick="deleteTask(${task.id})" class="fas fa-trash-alt"></i>
                </span>
            </div>
        `
    })
    resetForm()
}


// borrar una tarea por id
const deleteTask = (id) => {
    const tareaFiltrada = data.filter((task) => {
        return task.id !== id
    });
    data = tareaFiltrada
    localStorage.setItem("tasks", JSON.stringify(data));
    createTasks()
}

// editar tarea
const updateTask = (id) => {
    const tareaFiltrada = data.find((task) => {
        return task.id === id
    })
    textInput.value = tareaFiltrada.text;
    dateInput.value = tareaFiltrada.date;
    textarea.value = tareaFiltrada.description;
    console.log(tareaFiltrada)
    const filter = data.filter((task) => {
        return task.id !== id
    })
    data = filter
    localStorage.setItem("tasks", JSON.stringify(data));

    // deleteTask(id)
    createTasks()
}

createTasks()