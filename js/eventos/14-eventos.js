// const saludar = () => {
//     console.log("hola mundo desde el archivo js")
// }

// click and dbclick event, este evento capta cada vez que realizamos un click o un doble click en algun elemento del html

const link = document.getElementById("algo");

// const clicked = () => {
//     console.log("clickeado");

// }

// onselect event, cuando se selecciona un texto dentro de un elemento  html
// const clicked = () => {
//     console.log("elemento o texto seleccionado");

// }

// onload event, cuando se carga la página
// const data = () => {
//     console.log("datos cargados");
// }
// window.onload = () => {
//     console.log("página cargada");
//     data();
// }

// onresize event, cuando se cambia el tamaño de la ventana
// window.onresize = () => {
//     console.log("tamaño de la ventana cambiado");
// }

// onmousedown event, cuando se pulsa el botón del mouse
// window.onmousedown = () => {
//     console.log("botón del mouse pulsado");
// }

// // onmouseup event, cuando se suelta el botón del mouse
// window.onmouseup = () => {
//     console.log("botón del mouse suelto");
// }

// onscroll event, cuando se hace scroll en la página
// window.onscroll = () => {
//     console.log("scroll");
// }

// mouse event (mousemove) evento que capta cuando se mueve el cursor del mouse sobre el documento
// const containerElement = document.querySelector(".container");
// window.addEventListener("mousemove", function (event) {
//   containerElement.innerHTML = `
//     <div class="mouse-event">
//     ${event.clientX}
//     <h4>Mouse X Prosition(px)</h4>
//   </div>
//   <div class="mouse-event">
//     ${event.clientY}
//     <h4>Mouse Y Prosition(px)</h4>
//   </div>
//     `;
// });

// keydown event, cuando se pulsa una tecla sin soltarla
// const input = document.getElementById("input-text");
// input.addEventListener("keydown", (event) => {
//     console.log("keydown event, cuando se pulsa una tecla sin soltarla")
// });
// keyup event, cuando se suelta una tecla
// const funcion = (event) => {
//     console.log(event)
//     console.log("keyup event, cuando se suelta una tecla")
// }
// input.addEventListener("keyup", funcion)

// kepress event, cuando se pulsa una tecla y se suelta
// input.addEventListener("keypress", (e) => {
//     console.log(e)
//     console.log("kepress event, cuando se pulsa una tecla y se suelta")
// })

// onchange o change event, cuando se cambia el valor de un input
// const changed = (e) => {
//     console.log(e.target.value);
// }
// input.addEventListener("change", changed);

// submit event, cuando se pulsa el botón de enviar
// las funciones que se ejecutan dentro de un listener se llaman event handlers o manejadores de eventos
// const form = document.getElementById("formulario");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let nombre = document.getElementById("nombre").value;
//     let apellido = document.getElementById("apellido").value;
//     let edad = document.getElementById("edad").value;
//     console.log(nombre);
//     console.log(apellido);
//     console.log(edad);
// })
// if(form == "enviado") {
//     form.removeEventListener("submit", function(e){
//         console.log("evento eliminado")
//     })
// }

// captura de eventos o capturing
// evento de burbuja o bubbling

for (const element of document.querySelectorAll("*")) {
    // element.addEventListener("click", (e) => alert(`capturing ${element.tagName}`), true);
    element.addEventListener("click", (e) => alert(`bubbling ${element.tagName}`));
}