// vamos a traer los datos de localstorage y vamos a definir la memoria
let agenda = JSON.parse(localStorage.getItem("agenda")) || [];
let memo = 10;

//agendaFiltrada es una variable momentanea que trae los datos filtrados
let agendaFiltrada = JSON.parse(localStorage.getItem("agenda")) || [];

class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
};

//Contador de registros--------------------------------------
function contarRegistro(array) {
    document.querySelector("#count").innerHTML =  array.length;
};

// agregar un contacto a la agenda----------------
function addContact() {
    // traer los datos del formulario para recuperar el value(nombre y telefono)
    let nombre = document.querySelector("#nombreText");
    let telefono = document.querySelector("#telefText");

    // en el if validar si los campos estan vacios, caso contrario pasamos al else 
    if(!nombre.value || !telefono.value) {
        alert("faltan datos")
        document.querySelector("#nombreText").focus();
    } else {
        // si los campos no estan vacios, verificamos si el contacto por el nombre ya existe en la agenda
        // creamos una funcion verifyContact que nos va a retornar true o false
        console.log(nombre.value)
        let verify = verifyContact(nombre.value);
        // si el contacto existe, mostramos un alert
        if(verify) {
            alert("el contacto ya existe en su agenda")
        } else {
            // verificamos si la agenda esta llena
            if(memo > 0) {
                // si el contacto no existe, creamos un nuevo objeto de la clase Contacto
                    agenda.push(new Contacto(nombre.value.toUpperCase(), telefono.value));
                    localStorage.setItem("agenda", JSON.stringify(agenda));
                    memo -= 1;
            } else {
                alert("memoria llena, elimine algunos contactos")
            }
            updateAgenda()
        }
    }
};

//Verificar si un contacto existe en la agenda----------------
function verifyContact(nombre) {
    // creamos una variable la cual vamos a realizar un find para ver si el nombre del contacto existe en la agenda
    // si el nombre existe, la variable va a retornar true, caso contrario false
    let verify = agenda.find(function (contacto) {
        return contacto.nombre.toLowerCase() === nombre.toLowerCase();
      });
      if (verify) {
        console.log(verify);
        return true;
      } else {
        return false;
      }
}

//Actualizador de la data y formulario--------------------------
function updateAgenda() {
    document.querySelector("#nombreText").value = "";
    document.querySelector("#telefText").value = "";
    document.querySelector("#nombreText").focus();
    agenda = JSON.parse(localStorage.getItem("agenda"));
    contarRegistro(agenda)
    cargarTabla(agenda)
}


//Crea el cuerpo de la tabla-------------------------------------
function cargarTabla(array) {
    document.querySelector("#cuerpoTabla").innerHTML = "";
    array.forEach(function(elemento, index){
        let fila = document.createElement("tr");
        fila.classList = "text-center";
        let datos = `
            <td>${elemento.nombre}</td>
            <td>${elemento.telefono}</td>
            <td>
                <button class="btn btn-danger" onclick='deleteContact(${index})'> X </button>
            </td>
        `;
        fila.innerHTML = datos;
        let cuerpo = document.querySelector("#cuerpoTabla");
        cuerpo.appendChild(fila);
    });

}


//Borrar un contacto de la agenda---------------------------
function deleteContact(idx) {
    agenda = JSON.parse(localStorage.getItem("agenda"));

    let index = agenda.findIndex((contacto) => {
        return contacto.nombre === agenda[idx].nombre;
    })
    let validar = confirm(`Esta seguro que desea eliminar a ${agenda[index].nombre} de la agenda?`)

    if(validar) {
        agenda.splice(index, 1);
        localStorage.setItem("agenda", JSON.stringify(agenda));
        updateAgenda()
    }
}


//Filtrar tabla usando el input-------------------------
function filterTabla() {
    let text = document.querySelector("#textBuscar").value;
    agenda = JSON.parse(localStorage.getItem("agenda"));
    agendaFiltrada = agenda.filter((contacto) => {
        return contacto.nombre.toLowerCase().indexOf(text.toLowerCase()) > -1;
    })
    console.log(agendaFiltrada);
    document.querySelector("#textBuscar").value = "";
    document.querySelector("#textBuscar").focus();
    contarRegistro(agendaFiltrada);
    cargarTabla(agendaFiltrada);
}


// carga inicial de la interface
cargarTabla(agenda);
contarRegistro(agenda);