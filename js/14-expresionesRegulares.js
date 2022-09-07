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
