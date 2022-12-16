import { campoRequerido, validarGeneral, validarEmail, validarContraseña, validarContraseña2 } from "./validaciones.js";
import { User } from "./registroClass";

let campoNombre = document.getElementById("nombreRegistro");
let campoApellido = document.getElementById("apellidoRegistro");
let campoEmail = document.getElementById("emailRegistro");
let campoContraseña = document.getElementById("contraseñaRegistro");
let campoContraseña2 = document.getElementById("contraseñaRegistro2");
let formRegistro = document.getElementById("formRegistro");

let usuarioExistente = false;

let listaUsuarios = JSON.parse(localStorage.getItem("arrayUsersKey")) || [];

campoNombre.addEventListener("blur", () => {
  campoRequerido(campoNombre);
});

campoApellido.addEventListener("blur", () => {
  campoRequerido(campoApellido);
});

campoEmail.addEventListener("blur", () => {
  validarEmail(campoEmail);
});

campoContraseña.addEventListener("blur", () => {
  validarContraseña(campoContraseña);
});

campoContraseña2.addEventListener("blur", () => {
  validarContraseña2(campoContraseña2);
});


function guardarUsuario(e) {
  e.preventDefault();
  if (
    validarGeneral(
      campoNombre,
      campoApellido,
      campoEmail,
      campoContraseña,
      campoContraseña2
      )
      ) {
        if (usuarioExistente === false) {
          crearUsuario();
        } else {
      modificarUsuario();
    }
  }
}

function crearUsuario() {
  let usuarioNuevo = new User(
    campoNombre.value,
    campoApellido.value,
    campoEmail.value,
    campoContraseña.value,
    campoContraseña2.value
    );
  listaUsuarios.push(usuarioNuevo);
  guardarLocalStorage();
  Swal.fire(
    "Cuenta creada!",
    "Su cuenta ha sido creada correctamente",
    "success"
    );
  limpiarFormulario();
  }

function limpiarFormulario() {
  formRegistro.reset();
  campoNombre.className = "form-control";
  campoApellido.className = "form-control";
  campoEmail.className = "form-control";
  campoContraseña.className = "form-control";
  campoContraseña2.className = "form-control";
}

function guardarLocalStorage() {
  localStorage.setItem("arrayUsersKey", JSON.stringify(listaUsuarios));
}

formRegistro.addEventListener("submit", guardarUsuario);
