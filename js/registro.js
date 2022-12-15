import { campoRequerido, validarGeneral, validarEmail, validarContraseña } from "./validaciones.js";
import { Cuenta } from "./registroClass";

let campoNombre = document.getElementById("nombre");
let campoApellido = document.getElementById("apellido");
let campoEmail = document.getElementById("email");
let campoContraseña = document.getElementById("contraseña");
let formRegistro = document.getElementById("formRegistro");

let cuentaExistente = false;

let listaCuentas = JSON.parse(localStorage.getItem("arrayCuentasKey")) || [];

campoNombre.addEventListener("blur", () => {
  campoRequerido(campoNombre);
});

campoApellido.addEventListener("blur", () => {
  campoRequerido(campoApellido);
});

campoEmail.addEventListener("blur", () => {
  campoRequerido(campoEmail);
});

campoContraseña.addEventListener("blur", () => {
  campoRequerido(campoContraseña);
});

formRegistro.addEventListener("submit", guardarCuenta);

function guardarCuenta(e) {
  e.preventDefault();
  if (
    validarGeneral(
      campoNombre,
      campoApellido,
      campoEmail,
      campoContraseña
    )
  ) {
    if (cuentaExistente === false) {
      crearCuenta();
    } else {
      modificarCuenta();
    }
  }
}

function crearCuenta() {
  let cuentaNueva = new Cuenta(
    campoNombre.value,
    campoApellido.value,
    campoEmail.value,
    campoContraseña.value
  );
  listaCuentas.push(cuentaNueva);
  limpiarFormulario();
  guardarLocalStorage();
  Swal.fire(
    "Cuenta creada!",
    "Su cuenta ha sido creada correctamente",
    "success"
  );
}

function limpiarFormulario() {
  formRegistro.reset();
  campoNombre.className = "form-control";
  campoApellido.className = "form-control";
  campoEmail.className = "form-control";
  campoContraseña.className = "form-control";
  cuentaExistente = false;
}

function guardarLocalStorage() {
  localStorage.setItem("arrayCuentasKey", JSON.stringify(listaCuentas));
}

function modificarCuenta() {
  let indiceCuenta = listaCuentas.findIndex((itemCuenta) => {
    return itemCuenta.email == campoEmail.value;
  });
  listaCuentas[indiceCuenta].nombre = campoNombre.value;
  listaCuentas[indiceCuenta].apellido = campoApellido.value;
  listaCuentas[indiceCuenta].contraseña = campoContraseña.value;
  guardarLocalStorage();
  limpiarFormulario();
}
