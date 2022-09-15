let agenda = JSON.parse(localStorage.getItem("agenda")) || [];
let memo = 10;

let agendaFiltrada = JSON.parse(localStorage.getItem("agenda")) || [];

class Contacto {
    constructor(nombre, telefono){
        this.nombre = nombre;
        this.telefono = telefono;
    }
};

function contarRegistro(array){
    document.querySelector("#count").innerHTML = array.length;
};

function agregarContacto(){
    let nombre = document.querySelector("#nombreText");
    let telefono = document.querySelector("#telefText");

    if (!nombre.value || !telefono.value){
        alert("Faltan datos");
        document.querySelector("#nombreText").focus();
    }
    else {
        let verify = verifyContact(nombre.value);
        if(verify){
            alert("el contacto ya existe");
        }
        else {
            if (memo > 0){
                agenda.push(new Contacto(nombre.value.toUpperCase(), telefono.value))
                localStorage.setItem("agenda", JSON.stringify(agenda));
                memo -= 1;
            }
            else {
                alert("memoria llena, elimine un contacto");
            }
            updateAgenda();
        }
    }


}

function verifyContact(nombre){
    let verify = agenda.find(function(contacto){
        return contacto.nombre.toLowerCase() == nombre.toLowerCase();
    });
    if (verify){
        return true;
    }
    else {
        return false;
    }
}

function updateAgenda(){
    document.querySelector("#nombreText").value = "";
    document.querySelector("#telefText").value = "";
    document.querySelector("#nombreText").focus();
    agenda = JSON.parse(localStorage.getItem("agenda"));
    contarRegistro();
    cargarTabla();
}

