// 1- Crea un objeto llamado auto que tenga algunas características como el color, 
//    marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir
//    encender y apagar el auto.
let auto = {
    color: 'rojo', 
    marca:'audi', 
    modelo :2016,
    arranque:true,
    encendido:function(){
        this.arranque = !this.arranque;
        console.log(this.arranque);
    },
}

console.log(auto);
auto.encendido();

// Cuenta bancaria - Dificultad:  🟢🟡
// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.


let cuenta = {

    titular:'Alex',
    saldo:0,
    ingresar:function(monto){

        this.saldo = parseFloat(this.saldo)  + parseFloat(monto);

    },
    extraer:function(monto){
        this.saldo = parseFloat(this.saldo)  - parseFloat(monto);
    },
    informar:function(){
        console.log('Su cuenta tiene : ', this.saldo);
    }
}

cuenta.informar();
cuenta.ingresar(100500);
cuenta.extraer(7500);
cuenta.informar();

// Rectángulos
// Dificultad:  🟢
// 3-Escribe una clase que permita crear distintos objetos “rectángulos”,
//  con las propiedades de alto y ancho, mas los métodos necesarios para modificar y
//  mostrar sus propiedades, calcular el perímetro y el área


let rectangulo = {

    perimetro:function(alto, ancho){
        
        return console.log(`El perimetro es ${2*(parseFloat(alto) + parseFloat(ancho))}`)
    },
    area:function(alto, ancho){
        
        return console.log(`El area es : ${parseFloat(alto) * parseFloat(ancho)}`)
    },
}


rectangulo.perimetro(2,5);
rectangulo.area(2,5);


// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, 
// nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos 
// instanciados.

let Producto = {

    código:0, 
    nombre:'',
    precio:0,
    mostrarProducto:function(){
        document.write(`<b>Producto</b> :`) 
        document.write("<br>");
        document.write(`codigo ${this.código},`)
        document.write("<br>");
        document.write(`nombre ${this.nombre}, `)
        document.write("<br>");
        document.write(`precio ${this.precio}`);
        document.write("<br>");
    },

}

let productos=[];
let producto1 = (Producto.código=123,Producto.nombre='Pera',Producto.precio=45, Producto.mostrarProducto());
let producto2 = (Producto.código=456,Producto.nombre='Banana',Producto.precio=91, Producto.mostrarProducto());
let producto3 = (Producto.código=789,Producto.nombre='Manzana',Producto.precio=37, Producto.mostrarProducto());


// Generaciones - Dificultad:  🟢🟡🔴

// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer),
//  peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación 
// pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:

let Persona = {

    nombre:'',
    edad:null, 
    DNI:null,
    sexo: 'H'|'M',
    peso:null,
    altura:null,
    nacimiento:null,
    mostrarGeneracion:function(){

        if(1994 > parseInt(this.nacimiento) && parseInt(this.nacimiento) < 2010){

            console.log(`${this.nombre} Es generacion Z`);

        }else if(1981 > parseInt(this.nacimiento) && parseInt(this.nacimiento) < 1993){
            console.log(`${this.nombre} Es generacion Y`);

        }else if(1969 > parseInt(this.nacimiento) && parseInt(this.nacimiento) < 1980){
            console.log(`${this.nombre} Es generacion Y`);

        }else if(1949 > parseInt(this.nacimiento) && parseInt(this.nacimiento) < 1968){
            console.log(`${this.nombre} Es generacion Baby Boom!`);

        }else if(1930 > parseInt(this.nacimiento) && parseInt(this.nacimiento) < 1948){
            console.log(`${this.nombre} Silent Generacion`);

        }else {
            console.log(`${this.nombre} Otra generacion!`);
        }



    },
    esMayorDeEdad:function(){

        if(parseInt(this.edad)>18){
            console.log(`${this.nombre} Es mayor de edad!`);

        }else{
            console.log(`${this.nombre} Es menor de edad!`);
        }

    },
    mostrarDatos:function(){
        console.log(`Los datos de ${this.nombre} son:\n
                     edad  :${this.edad},
                     Dni   : ${this.DNI}
                     Sexo  : ${(this.sexo==='H') ? 'Hombre' : 'Mujer'}
                     altura: ${this.altura}
                     peso  : ${this.peso}`);
    },
    generaDNI:function(){

        this.DNI = Math.floor(100000 + Math.random() * 90000000);
        return this.DNI;

    },

}

// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

Persona.nombre='Tony';
    Persona.edad=29; 
    Persona.DNI=Persona.generaDNI();
    Persona.sexo= 'H';
    Persona.peso=90;
    Persona.altura=180;
    Persona.nacimiento=1991;

    Persona.mostrarGeneracion();
    Persona.esMayorDeEdad();
    Persona.mostrarDatos();


    // Libros - Dificultad:  🟢🟡🔴
    // 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
    // ISBN
    // Título
    // Autor
    // Número de páginas
    
    // Crear sus respectivos métodos get y set correspondientes para cada propiedad. 
    // Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
    
    // “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
    
    // Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
    // Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

    class Libro {
        
        constructor(ISBN, Título, Autor, numero_de_paginas){

            this.ISBN = ISBN;
            this.Título = Título;
            this.Autor = Autor;
            this.numero_de_paginas = numero_de_paginas;
        }

        mostrarLibro = () =>{

            return document.write( ` <b> Libro </b>  <br> ISBN: ${this.ISBN}, <br> Titulo: ${this.Título},
            <br> Autor: ${this.Autor}, <br> Paginas: ${this.numero_de_paginas} <br>`);
        }
                
    }



    let libro1 = new Libro(123,'libro1', 'autor1',120);
    let libro2 = new Libro(465,'libro2', 'autor2',122);

    libro1.mostrarLibro();
    libro2.mostrarLibro();

    if(libro1.numero_de_paginas > libro2.numero_de_paginas){
         document.write( ` <b> ${libro1.Título} </b> tiene mas paginas que ${libro2.Título} <br>`);
    } else {
         document.write( ` <b> ${libro2.Título} </b> tiene mas paginas que ${libro1.Título} <br>`);
    }

    


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


class Persona2{

    constructor(nombre, apellido, edad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }

    mostrarDatos = () =>{

        return document.write( ` <b> Datos </b>  <br> Nombre: ${this.nombre}, <br> Apellido: ${this.apellido},
            <br> Edad: ${this.edad} <br> `);
    }

    agregarDatos = (nombre, apellido, edad) =>{
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }

}

class Contacto extends Persona2{

    constructor(nombre, apellido, edad, numero, email){
        super(nombre, apellido, edad);
        this.numero=numero;
        this.email=email;
    }

    mostrarContacto = () =>{

        return document.write( ` <b> Contacto </b> 
                                 <br> Nombre: ${this.nombre},
                                 <br> Numero: ${this.numero},
                                 <br> Email: ${this.email} <br> `);
    }

    setContacto = (numero, email) =>{
        this.numero=numero;
        this.email=email;
    }


}


let contacto1 = new Contacto('Tony', 'Diaz', 30, 3814757398, 'tony81191@gmail.com');
contacto1.mostrarContacto();





