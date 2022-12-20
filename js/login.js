import { validarEmailLogin, validarContraseña3 } from "./validacionesLogin.js";

let usuarioAdmin = { email: "admin@admin.com", contraseña: "Admin1234" };

let listaUsuarios2 = JSON.parse(localStorage.getItem("listaUsuarios")) || [];
let campoEmailLogin = document.getElementById("emailLogin");
let campoContraseñaLogin = document.getElementById("contraseñaLogin");
let botonIniciarSesion = document.getElementById("btnIniciarSesion");
let botonRecuperarContraseña = document.getElementById("btnRecuperarContraseña");

let inicioSesion = false;

campoEmailLogin.addEventListener("blur", () => {
  validarEmailLogin(campoEmailLogin);
});

campoContraseñaLogin.addEventListener("blur", () => {
  validarContraseña3(campoContraseñaLogin);
});


/* function busquedaUsuario(email) {
  const newUsuario = listaUsuarios2.find((user) => user.email === email);
  if (newUsuario !== undefined) {
    return newUsuario;
  } else {
    return "";
  }
} */

botonIniciarSesion.addEventListener("click", ingresoUsuario);
function ingresoUsuario(e) {
  e.preventDefault();
  let ingresoMensaje = document.getElementById("ingresoErrorAdmin");
  if (
    campoEmailLogin.value === usuarioAdmin.email &&
    campoContraseñaLogin.value === usuarioAdmin.contraseña
  ) {
    inicioSesion = true;
    ingresoMensaje.innerHTML = `<p class="text-center text-success border-light">${"BIENVENIDO ADMINITRADOR!"}</p>`;
    sessionStorage.setItem("estadoDeSesion", JSON.stringify(inicioSesion));
    localStorage.setItem("usuarioAdmin", JSON.stringify(usuarioAdmin));
    sessionStorage.setItem("usuarioActivo", JSON.stringify(usuarioAdmin));
    window.setTimeout(function () {
      window.location.replace(`admin.html`);
    }, 2000);
    return;
  } else {
    const resultado = listaUsuarios2.find(
      (usuario) =>
        usuario.email === campoEmailLogin.value &&
        usuario.password === campoContraseñaLogin.value
    );
    if (resultado !== undefined) {
      inicioSesion = true;
      ingresoMensaje.innerHTML = `<p class="text-center text-succes border-light ">${"BIENVENIDO USUARIO!"}</p>`;
      sessionStorage.setItem("estadoDeSesion", JSON.stringify(inicioSesion));
      localStorage.setItem("usuarioComun", JSON.stringify(resultado));
      sessionStorage.setItem("usuarioActivo", JSON.stringify(resultado));
      window.location.replace(`index.html`);
    } else {
      alert("EMAIL O CONTRASEÑA INCORRECTOS")
      window.setTimeout(function () {
        window.location.reload();
      }, 2000);
    }
  }
  if (campoEmailLogin.value === "" || campoContraseñaLogin.value === "") {
    ingresoMensaje.innerHTML = `<h6 class="text-center text-danger border-light ">${"FAVOR COMPLETAR TODOS LOS CAMPOS"}</p6>`;
  }
}

botonRecuperarContraseña.addEventListener("click", recuperarContraseña);
function recuperarContraseña(e) {
  e.preventDefault();
  window.prompt("Ingrese email para recuperar su contraseña");
  window.prompt("Ingrese su nombre y apellido");
  Swal.fire(
    "Email de recuperación",
    "Si los datos ingresados son correctos, recibirá un email con su contraseña de acceso",
    "success"
  );
}
