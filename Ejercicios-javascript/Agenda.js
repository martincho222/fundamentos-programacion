//     7- Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. 
// Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. 
// Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// aniadirContacto(Contacto): Añade un contacto a la agenda, 
// sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Conctacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, 
// indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.


class Persona{

    constructor(nombre, apellido, edad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }

    mostrarDatos = () =>{

        return document.write( ` <b> Datos </b>  <br> Nombre: ${this.nombre} <br> `);
    }

    agregarDatos = (nombre) =>{
        this.nombre=nombre;
        
    }

}

class Contacto extends Persona{

    constructor(nombre, apellido, edad, numero, email){
        super(nombre, apellido, edad);
        this.numero=numero;
        
    }

    mostrarContacto = () =>{

        return document.write( ` <b> Contacto </b> 
                                 <br> Nombre: ${this.nombre},
                                 <br> Numero: ${this.numero} <br> `);
    }

    setContacto = (numero, email) =>{
        this.numero=numero;
        this.email=email;
    }


}


let contacto1 = new Contacto('Tony', 3814757398);
contacto1.mostrarContacto();