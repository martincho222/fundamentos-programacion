// 1-

// let auto  = {
//     color: "rojo",
//     modelo: "toyota",
//     marca: "no se de autos",
//     encendido: true,
// }


// function encenderApagar(){
//     auto.encendido = !auto.encendido;
// }

// 2-

// class cuenta {
//     constructor(titular, saldo){
//         this.titular =  titular;
//         this.saldo = 0;
//     }
//     ingresar (cantidad){
//         this.saldo = this.saldo + cantidad;
//     }
//     extraer (cantidad) {
//         this.saldo = this.saldo - cantidad;
//     }
//     informar(){
//         console.log(`usted tiene ${this.saldo}`);
//     }
// }

// let alex = new cuenta("Alex", 0)

// 3-

// class rectangulos {
//     constructor(ancho,alto) {
//         this.ancho = ancho;
//         this.alto = alto;
// }
//     calcularPerimetro(){
//         let perimetro = (2*this.ancho + 2*this.alto)
//         console.log(`El perimetro es ${perimetro}`);
//     }

// }

// let rectangulo1 = new rectangulos(5,6);

// 4-

class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, aniodenac){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.aniodenac = aniodenac;
    }
    mostrarGeneracion(){
        if(this.aniodenac >= 1994 && this.aniodenac <= 2010){
            console.log(`Generacion Z --> Irreverencia`)
        }
        else if(this.aniodenac >= 1981 && this.aniodenac <= 1993){
            console.log(`Generacion Y --> Frustacion`)
        }
        else if(this.aniodenac >= 1981 && this.aniodenac <= 1993){
            console.log(`Generacion X --> Obsesion con el exito`)
        }
        else if(this.aniodenac >= 1981 && this.aniodenac <= 1993){
            console.log(`Generacion Baby Boom --> Ambicion`)
        }
        else if(this.aniodenac >= 1981 && this.aniodenac <= 1993){
            console.log(`Silent Generation --> Austeridad`)
        }
    }

    esMayorDeEdad(){
        if (this.edad >= 18){
            console.log(`Es mayor de edad`);
        }
        else {
            console.log(`Es menor de edad`);
        }
    }

    // getRandomIntInclusive(min, max) {
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     return Math.floor(Math.random() * (max - min + 1) + min);
    // }

    // generarDni(){
    //     this.dni = getRandomIntInclusive(10000000, 99999999);
    // }

    mostrarDatos(){
        console.log(`Nombre: ${this.nombre}
    Edad: ${this.edad}
    DNI: ${this.dni}
    Genero: ${this.sexo}
    Peso: ${this.peso} Kg
    Altura: ${this.altura} Cm
    Año de nacimiento: ${this.aniodenac}`)
    }
}

let jorge = new Persona("jorge", 16, 0, "H", 78, 156, 1999);