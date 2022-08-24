// class Persona {
//     constructor(nombre, apellido, edad) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.edad = edad
//     }
//      saludar = () => {
//         console.log(`Hola a todos soy ${this.nombre}`)
//     }

//      agregarDatos(edad) {
//         this.edad = edad
//     }
// };

// class Profesor extends Persona {
//     constructor( nombre, apellido, edad, materia) {
//         super(nombre, apellido, edad)
//         this.materia = materia
//     }
//     presentar() {
//         console.log(`Buenas noches estamos aprendiendo ${this.materia}`)
//     }
// }
// creo una nueva instancia de la plantilla
// const persona1 = new Persona("martin", "jerez");
// console.log(persona1.agregarDatos(35));
// console.log(persona1)
// const profesor1 = new Profesor("martin", "jerez", 35, "javascript");
// const profesor2 = new Profesor("Naty", "Acevedo", 35, "Backend");
// console.log(profesor1.saludar());
// console.log(profesor2.saludar());

/*
Cuenta Bancaria
Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades
- una propiedad titular valor "xxx"
- una propiedad saldo
- un metodo ingresar, que permita añadir dinero a la cuenta, pasando la cantidad como parametro
- un metodo extraer, que permita retirar dinero, pasando la cantidad por parametro
- un metodo informar, que retorne la informacion del estado de cuenta
utiliza este objeto para mostrar la descripcion, ingresar y extraer dinero y volver a mostrar la descripcion del estado de cuenta
*/ 

// class Cuenta {
//     constructor(titular, saldo) {
//         this.titular = titular;
//         this.saldo = saldo;
//     }
//     ingresar(valor) {
//         // controlar que el valor sea un número mayor a 0
//         if(isNaN(parseFloat(valor)) || parseFloat(valor) <= 0) {
//             console.log("Ingrese un valor númerico mayor que 0");
//             return
//         }
//         this.saldo = this.saldo + valor;
//         console.log(`se ingreso ${valor}`)
//         this.informar;
//     }
//     extraer(valor) {
//         // controlar que el valor sea un número mayor a 0
//         if(isNaN(parseFloat(valor)) || parseFloat(valor) <= 0) {
//             console.log("Ingrese un valor númerico mayor que 0");
//             return
//         }
//         // validar que el saldo a extraer no sea mayor al saldo de la cuenta
//         if(valor > this.saldo){
//             console.warn(`solo puede extraer hasta $${this.saldo}`);
//             return
//         } else {
//             this.saldo = this.saldo - valor;
//             console.log(`se extrajo ${valor}`)
//             this.informar;
//         }

//     }
//     get informar() {
//         console.log("=========== Detalle de la cuenta ===========");
//         console.log(`Titular: ${this.titular}`);
//         console.log(`Saldo: ${parseFloat(this.saldo.toFixed(2))}`);
//         console.log("=============================================")
//     }
// }

// const cuenta1 = new Cuenta("Agustina", 200000)
// const cuenta2 = new Cuenta("Conti", 2000000)
// cuenta1.extraer(100000)
// cuenta1.extraer(50000)
// cuenta2.ingresar(200000)
// console.log(cuenta1)


/*
    Escribe una clase Producto para crear objetos, estos deben presentar las siguientes propiedades, codigo, nombre y precio, ademas un metodo imprimeDatos
    el cual escribe por pantalla los valores de las propiedades
    posteriomente, vamos a crear 3 instancias y guardarlas en un array
    por ultimo, utilice el metodo imprimeData para mostrar los valores de los 3 objetos instanciados
*/

class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    get imprimeDatos() {
        document.write(`Codigo: ${this.codigo}`);
        document.write(`Nombre: ${this.nombre}`);
        document.write(`Precio: ${this.precio}`);
        document.write("===============================");
    }
}

let productos = [];

function agregarProductos() {
    let veces = parseInt(prompt("Cuantos productos va a ingresar?"))
    if(isNaN(veces) || veces <= 0) {
        console.error("Debe ingresar un número mayor a cero");
    }
    for(let i = 0; i < veces; i++) {
        let codigo = i + 1;
        let nombre = prompt(`Ingrese el nombre del producto #${i + 1}`);

        if(nombre === "" || nombre === null) {
            console.error("Faltaron datos o se canceló");
            return
        } else {
            let precio = parseFloat(prompt("Ingrese un precio"));
            if(isNaN(precio)) {
                console.error("No se ingreso un número o se canceló");
                return
            }
            productos.push(new Producto(codigo, nombre.toUpperCase(), precio.toFixed(2)))
        }
    }
    for(let i = 0; i < productos.length; i++) {
        productos[i].imprimeDatos
    }
}

// agregarProductos()










