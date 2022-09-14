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
  constructor(id, nombre, email, password, isAdmin = false, isLogged = false) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.password = password;
    this.isAdmin = isAdmin;
    this.isLogged = isLogged;
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

// funcionalidad de login o inicio de sesion

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email-login").value;
  const password = document.getElementById("password-login").value;
  const errorLogin = document.querySelector(".error-login");
  errorLogin.innerHTML = "";
  // validar que los campos no esten vacios
  if(email === "" || password === ""){
    errorLogin.innerHTML = "Debes ingresar un email y una contraseña";
    errorLogin.style.display = "block";
    errorLogin.style.padding = "10px";
    errorLogin.style.marginTop = "10px";
    errorLogin.style.color = "white";
    errorLogin.style.borderRadius = "10px";
    errorLogin.style.backgroundColor = "red";
    return;
  }
  // validar si existe un usuario con el mismo mail
  const validarEmail = usuarios.find((usuario) => {
    return usuario.email === email && usuario.password === password
  });
  if(validarEmail === undefined) {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Usuario o contraseña son incorrectos",
      showConfirmButton: false,
      timer: 1500,
    });
    document.getElementById("login").reset();
    document.getElementById("email-login").focus();
    return;
  }

  // validar el usuario existente y lo guardamos en local storage como logueado
  validarEmail.isLogged = true;
  localStorage.setItem("usuarioLogueado", JSON.stringify(validarEmail));
  formLogin.reset();
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Bienvenido!",
    showConfirmButton: false,
    timer: 1500,
  });
  // si quiero redireccionar a otra seccion utilizo el siguiente codigo
  // window.location.href = "../index.html";
})

// funcion para cerrar sesion
const logout = () => {
  let usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
  console.log(usuarioLogueado);
  // usuarioLogueado.isLogged = false;
  // localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado))
  // if(usuarioLogueado !== undefined) {
  //   localStorage.removeItem("usuarioLogueado")
  // }
}

// cambiar a el role de admin
// const cambiarRole = () => {
//   const usuario = usuarios.find((usuario) => {
//     return usuario.email === "martincho111986@gmail.com";
//   })
//   usuario.isAdmin = true;
//   localStorage.setItem("usuarioLogueado", JSON.stringify(usuario))
//   console.log(usuario)
// }

// cambiarRole()