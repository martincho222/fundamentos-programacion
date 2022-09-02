// vamos a traer los datos de localstorage y vamos a definir la memoria
let agenda = JSON.parse(localStorage.getItem("agenda")) || [];
let memo = 10;

class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
};

function addContact() {
    let nombre = document.querySelector("#nombreText");
    let telefono = document.querySelector("#telefText");
    if(!nombre.value || !telefono.value) {
        alert("faltan datos")
        document.querySelector("#nombreText").focus();
    } else {
        let verify = verifyContact(nombre.value);
        if(verify) {
            alert("el contacto ya existe en su agenda")
        } else {
            if(memo > 0) {
                    agenda.push(new Contacto(nombre.value.toUpperCase(), telefono.value));
                    localStorage.setItem("agenda", JSON.stringify(agenda));
                    memo -= 1;
            } else {
                alert("memoria llena, elimine algunos contactos")
            }
        }
    }
}


//Verificar si un contacto existe en la agenda----------------
const verifyContact = (nombre) => {
    let verify = agenda.find((contacto) => {
        return contacto.nombre.toLowerCase() === nombre.toLowerCase();
    })
    if(verify){
        return true
    } else {
        return false
    }
}