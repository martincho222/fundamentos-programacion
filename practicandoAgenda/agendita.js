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
    contarRegistro(agenda);
    cargarTabla(agenda);
}

function cargarTabla(array){
    
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

function deleteContact(idx){
    agenda = JSON.parse(localStorage.getItem("agenda"));

    let index = agenda.findIndex((contacto) => {
        return contacto.nombre = agenda[idx].nombre;

    })

    let validar = confirm(`Estas seguro que querés borrar a ${agenda[index].nombre}?`)

    if(validar){
        agenda.splice(index, 1);
        localStorage.setItem("agenda", JSON.stringify(agenda));
        updateAgenda();
    }
}

cargarTabla(agenda);
contarRegistro(agenda);

// no entiendo esta funcion linea 114!! ademas que no funciona !

function filterTabla(){
    let text = document.querySelector("#textBuscar");
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
