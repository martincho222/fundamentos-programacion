/*

Enunciado ejercicio 1

Crea un script que pida al usuario el diámetro de una rueda y su grosor (en metros) y a través de condicionales if realice las siguientes operaciones:

a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”. Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para un vehículo pequeño”.

b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro es menor o igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”

*/
/*
const diametro = parseFloat(prompt('Ingresa el diámetro de la rueda'));
const grosor = parseFloat(prompt('Ingresa el grosor de la rueda'));
if(diametro !== typeof Number && grosor !== typeof Number) {
    alert('Ingresa un numero');
}else{
    if (diametro > 1.4) {
        document.write(`La rueda es para un vehículo grande`);
    }
    else if (diametro <= 1.4 && diametro > 0.8) {
        document.write(`La rueda es para un vehículo mediano`);
    }
    else {
        document.write(`La rueda es para un vehículo pequeño`);
    }
    if((diametro > 1.4 && grosor < 0.8) || (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25)) {
        document.write(`El grosor para esta rueda es inferior al recomendado`);
    }
}
*/

/*

Enunciado ejercicio 2

Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuanto le costará en función del topping que elija.

Finalmente, el programa escribe por pantalla el precio del helado con el topping seleccionado (o ninguno).

*/

/*
const toppingIngresado = prompt('Ingresa el topping que deseas');
const precioHelado = 1.90;
if (toppingIngresado === '') {
    document.write(`El helado sin topping cuesta: $${precioHelado}`);
} else if (toppingIngresado === 'oreo') {
    document.write(`El helado con Oreo cuesta: $${precioHelado + 1.00}`);
} else if (toppingIngresado === 'kitkat') {
    document.write(`El helado con KitKat cuesta: $${precioHelado + 1.50}`);
} else if (toppingIngresado === 'brownie') {
    document.write(`El helado con Brownie cuesta: $${precioHelado + 0.75}`);
} else {
    document.write(`No tenemos ese topping solicitado <br>`);
    document.write(`El helado sin topping cuesta: $${precioHelado}`);
}
*/

//Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión 



//Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. 








