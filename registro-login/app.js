// variables globales donde capturamos el elemento del formulario y el boton de registro como tambien el login
const btnSignIn = document.querySelector(".sign-in-btn"),
  btnSignUp = document.querySelector(".sign-up-btn"),
  signUp = document.querySelector(".sign-up"),
  signIn = document.querySelector(".sign-in");

// se agrega evento para que se muestre el formulario de registro y oculte el de inicio de sesion y viscera
document.addEventListener("click", (e) => {
  if (e.target === btnSignIn || e.target === btnSignUp) {
    signIn.classList.toggle("active");
    signUp.classList.toggle("active");
  }
});
///////////////////////////////////////////////////////////////////////

// hacemos referencia con querySelector a los formularios de login y registro
// despues creamos una variable usuarios donde se inicializa ya sea como un array vacio o trayendo los usuarios registrados desde localstorage.
const formSignUp = document.querySelector("#registro");
const formLogin = document.querySelector("#login");
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
console.log(usuarios);
// Crear una clase usuario con los datos que deberia ingresar.

class Usuario {
  constructor(id, nombre, email, password, isAdmin = false) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.password = password;
    this.isAdmin = isAdmin;
  }
}

// crear una funcion para generar un id automatico
function idRandom() {
  if (usuarios.length > 0) {
    return usuarios[usuarios.length - 1].id + Math.round(Math.random() * 100);
  } else {
    return Math.round(Math.random() * 100);
  }
}

// funcionalidad para el registro

formSignUp.addEventListener("submit", (e) => {
  e.preventDefault();
  let id = idRandom();
  let nombre = document.querySelector("#nombre-registro").value;
  let email = document.querySelector("#email-registro").value;
  let password = document.querySelector("#password-registro").value;
  let error = document.querySelector(".error");

  error.innerHTML = "";

  // validar el mail
  let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const emailValidado = regex.test(email);

  // validar los campos
  if (nombre === "" || email === "" || password === "") {
    error.innerHTML = "Todos los campos son obligatorios";
    error.style.display = "block";
    error.style.padding = "10px";
    error.style.marginTop = "10px";
    error.style.color = "white";
    error.style.borderRadius = "10px";
    error.style.backgroundColor = "red";
    return;
  }

  //   validar el mail
  if (!emailValidado) {
    error.innerHTML = "Email no valido";
    error.style.display = "block";
    error.style.padding = "10px";
    error.style.color = "red";
    return;
  }

  // validar si existe un usuario con el mismo mail
  let validarUser = usuarios.find((user) => {
    return user.email === email;
  });
  if (validarUser !== undefined) {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Usuario Existente",
      showConfirmButton: false,
      timer: 1500,
    });
    formSignUp.reset();
    document.querySelector("#nombre-registro").focus();
    return;
  }
  //   si el usuario no existe, creamos una nueva instancia de la clase Usuario y hacemos el push al array luego guardamos en localstorage

  let newUser = new Usuario(id, nombre, email, password);
  usuarios.push(newUser);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  formSignUp.reset();
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Registro exitoso!",
    showConfirmButton: false,
    timer: 1500,
  });
//   redireccionar a la pagina principal o a la pagina que deseamos que redireccione al loguearse correctamente
// window.location.href = "index.html";
});

// funcionalidad de login