// ELEMENTOS SELECTORES

// 1- getElementById, puedo seleccionar un elemento del html por su id
// console.log(document.getElementById("dom").textContent);

// 2- getElementsByClassName, puedo seleccionar un elemento del html por su clase
// console.log(document.getElementsByClassName("dom"));

// 3- getElementsByTagName, puedo seleccionar un elemento del html por su etiqueta
// console.log(document.getElementsByTagName("p"));

// 4 - getElementsByName, puedo soleccionar un elemento del html por el atributo name
// console.log(document.getElementsByName("dom1"));

// 5 - querySelector, puedo seleccionar un elemento del html por su selector
// console.log(document.querySelector("#dom"));
// console.log(document.querySelector(".dom"));
// const p = document.querySelector("#dom");
// console.log(p);

// 6 - querySelectorAll, puedo seleccionar todos los elementos del html por su selector
// console.log(document.querySelectorAll("p")[0].textContent);

// MANIPULACION DE ELEMENTOS DEL HTML O DOCUMENTO

// createElement() con este metodo creo un nuevo elemento.
// const h3 = document.createElement("h3");
// con el textContent añado un texto al elemento creado.
// h3.textContent = "Hola mundo";
// con appendChild() añado el elemento al documento.
// document.body.appendChild(h3);
// h3.style.color = "red";
// document.body.style.backgroundColor = "yellow";

///////////////////////////
// const div = document.querySelector(".contenedor");

// const parrafo = document.createElement("p");
// parrafo.textContent = ". Necessitatibus, perspiciatis dicta. Voluptates nobis ";
// div.innerHTML = `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>`;

// clonar nodos
// const nodo = document.getElementById("dom")
// const clon = nodo.cloneNode(true);
// // console.log(nodo)
// // console.log(clon)

// // especificar donde insertar un nodo
// const contenedor = document.createElement("p");
// contenedor.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit";
// // document.body.appendChild(contenedor);
// document.body.insertBefore(contenedor, nodo );

// podemos reemplazar un nodo
// const h3 = document.createElement("h3");
// h3.textContent = "Hola mundo";
// document.body.appendChild(h3);

// const h1 = document.createElement("h1");
// h1.textContent = "Hola mundo, soy un h1 creado despues del h3";
// document.body.replaceChild(h1, h3);

// eliminar un nodo
// const h3 = document.createElement("h3");
// h3.textContent = "Hola mundo";
// document.body.appendChild(h3);

// document.body.removeChild(h3);

