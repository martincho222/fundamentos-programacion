//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Enunciado ejercicio 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // Crea un script que pida al usuario el diámetro de una rueda y su grosor (en metros) y 
// //a través de condicionales if realice las siguientes operaciones:

// // a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”.
//  Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”.
//   Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla el mensaje 
//   “La rueda es para un vehículo pequeño”.

// // b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, 
// ó si el diámetro es menor o igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25,
//  deberá mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”


let diametro = parseFloat(prompt("ingrese diametro de la rueda : "));
let grosor = parseFloat(prompt("ingrese grosor de la rueda : "));

// a 
if(diametro > 1.4){
    alert(`A - La rueda es para un vehículo grande`);
} else if(diametro <= 1.4 && diametro > 0.8){
    alert(`A - La rueda es para un vehículo mediano`);

}else{
   alert(`A - La rueda es para un vehículo pequeño`) ;
}

//b 
if((diametro > 1.4 && grosor < 0.4 ) 
            || (diametro <= 1.4 && grosor < 0.25)){

                alert(`B - El grosor para esta rueda es inferior al recomendado`);
            }else{
                alert(`B - No especificado.`);
            }








// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Enunciado ejercicio 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // Escribe un programa que responda a un usuario que quiere comprar un helado
//  en una conocida marca de comida rápida cuanto le costará en función del topping que elija.

// // El helado sin topping cuesta $1.90.
// // El topping de oreo cuesta $1.
// // El topping de KitKat cuesta $1.50.
// // El topping de brownie cuesta $0.75.
// // En caso de no disponer del topping solicitado por el usuario el programa escribirá por pantalla
//  «no tenemos este topping, lo sentimos. » y a continuación informar del precio del helado sin ningún topping.
// // Finalmente, el programa escribe por pantalla el precio del helado con el topping seleccionado (o ninguno).