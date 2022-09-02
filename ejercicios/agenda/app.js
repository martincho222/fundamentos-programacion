// vamos a traer los datos de localstorage y vamos a definir la memoria
let agenda = JSON.parse(localStorage.getItem("agenda")) || [];
let memo = 10;

class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
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
        }
    }
};


//Verificar si un contacto existe en la agenda----------------
const verifyContact = (nombre) => {
    // creamos una variable la cual vamos a realizar un find para ver si el nombre del contacto existe en la agenda
    // si el nombre existe, la variable va a retornar true, caso contrario false
    let verify = agenda.find((contacto) => {
        return contacto.nombre.toLowerCase() === nombre.toLowerCase();
    })
    if(verify){
        return true
    } else {
        return false
    }
}