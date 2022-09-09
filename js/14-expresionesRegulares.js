// EXPRESIONES REGULARES
/*
    secuencia de caractes que forman un patron de busqueda, principalmente en la busqueda de cadenas de texto

    https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
    https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular
*/

// [abc] encontrar un de los caracteres que esta dentro del corchete
// [^abc] encontrar caracteres a expcepcion de los que estan dentro de los corchetes
// [0-9] encuentra digitos del 0 al 9
// [^0-9] encuentra digitos menos caracteres del 0 al 9

// let cadena ="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, vitae incidunt, tempora placeat fuga porro tenetur, exercitationem praesentium iste voluptate est perspiciatis sequi non tempore cumque culpa aut repellendus saepe hic voluptates ea? Voluptatem, facilis quisquam esse libero dicta sed quos nam iusto quis excepturi earum minus! Quasi, qui ut Lorem.";

// // // let expReg = new RegExp("Lorem", "m");
// let expReg = /lorem/g;

// console.log(cadena.search(expReg));

// metodos de expresiones regulares
// exect ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
//test ejecuta una busqueda sobre una expresion regular y devuelve true o false
//match ejecuta una busqueda sobre una expresion regular y devuelve un array con los resultados o null

// let expReg = /lorem/;

// clases de caracteres(ranges)

// [abc] encontrar un de los caracteres que esta dentro del corchete
// [^abc] encontrar caracteres a expcepcion de los que estan dentro de los corchetes
// [0-9] encuentra digitos del 0 al 9
// [^0-9] encuentra digitos menos caracteres del 0 al 9
// [a-z] encuentra caracteres de la a a la z
// [A-Z] encuentra caracteres de la A a la Z
// [a-zA-Z] encuentra caracteres de la a a la z y de la A a la Z
// [0-9a-zA-Z] encuentra caracteres de la a a la z y de la A a la Z y digitos del 0 al 9
// [0-9a-zA-Z_!$#"%" ] encuentra caracteres de la a a la z y de la A a la Z y digitos del 0 al 9 + espacios en blanco

// ANCLAS O ANCHORS
// /^\lorem/$
// ^ inicio de cadena 
// $ final de la cadena
// \b inicio de palabra
// \B final de palabra
// \d digitos del 0 al 9
// \D caracteres que no sean digitos del 0 al 9
// \s espacios en blanco
// \S caracteres a excepcion de los espacios en blanco
// \w caracteres alfanumericos
// \W caracteres a excepcion de los caracteres alfanumericos

// METACARACTERES
// . cualquier caracter excepto nueva linea
// \ caracter de escape
// [] agrupar caracteres
// [^] agrupar caracteres a excepcion de los que estan dentro de los corchetes
// | alternativa
// () agrupar expresiones 
// {} cuantificador
// - rangos

// CUANTIFICADORES
// * 0 o mas veces
// + 1 o mas veces
// ? 0 o 1 vez
// {n} n veces
// {n,} n o mas veces
// {n,m} n a m veces

// GRUPOS
// (expresion) agrupar expresiones
// (expresion1|expresion2) agrupar expresiones alternativas
// (?=expresion) agrupar expresiones que deben ir despues de la expresion
// (?!expresion) agrupar expresiones que no deben ir despues de la expresion
// (?<=expresion) agrupar expresiones que deben ir antes de la expresion

// Búsqueda avanzada con banderas(modificadores)
// /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i
// g / 	Búsqueda global. Encuentra todas las coincidencias, no solo la primera.
// i / 	Búsqueda que no distingue entre mayúsculas y minúsculas.
// m / 	Búsqueda multilínea. Encuentra coincidencias en varias líneas.
// s / 	Permite que el . coincida con caracteres de nueva línea. Por defecto, el . no coincide con caracteres de nueva línea.


// the password must be at least 8 characters long
// the password must contain at least one uppercase letter
// the password must contain at least one lowercase letter
// the password must contain at least one number
// the password must contain at least one special character
// the password must not contain spaces

// const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;

// const password = "Martin1234";

// console.log(regex.test(password));


