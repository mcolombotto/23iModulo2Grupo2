document
  .getElementById("btnInicioSesion")
  .addEventListener("click", iniciarSesion);
document.getElementById("btnRegistro").addEventListener("click", registro);
window.addEventListener("resize", anchoPagina)

let containerLoginRegistro = document.querySelector(".containerLoginRegistro");
let formLogin = document.querySelector(".formLogin");
let formRegistro = document.querySelector(".formRegistro");
let cajaTraseraLogin = document.querySelector(".cajaTraseraLogin");
let cajaTraseraRegistro = document.querySelector(".cajaTraseraRegistro");

function anchoPagina(){
    if(window.innerWidth > 850){
        cajaTraseraLogin.style.display = "block"
        cajaTraseraRegistro.style.display = "block"
    }else{
        cajaTraseraRegistro.style.display = "block"
        cajaTraseraRegistro.style.opacity = "1"
        cajaTraseraLogin.style.display = "none"
        formLogin.style.display = "block"
        formRegistro.style.display = "none"
        containerLoginRegistro.style.left = "0px"
    }
}

anchoPagina()

function iniciarSesion() {
  if (window.innerWidth > 850) {
    formRegistro.style.display = "none";
    containerLoginRegistro.style.left = "10px";
    formLogin.style.display = "block";
    cajaTraseraRegistro.style.opacity = "1";
    cajaTraseraLogin.style.opacity = "0";
  } else {
    formRegistro.style.display = "none";
    containerLoginRegistro.style.left = "0px";
    formLogin.style.display = "block";
    cajaTraseraRegistro.style.display = "block";
    cajaTraseraLogin.style.display = "none";
  }
}

function registro() {
  if (window.innerWidth > 850) {
    formRegistro.style.display = "block";
    containerLoginRegistro.style.left = "410px";
    formLogin.style.display = "none";
    cajaTraseraRegistro.style.opacity = "0";
    cajaTraseraLogin.style.opacity = "1";
  } else {
    formRegistro.style.display = "block";
    containerLoginRegistro.style.left = "0px";
    formLogin.style.display = "none";
    cajaTraseraRegistro.style.display = "none";
    cajaTraseraLogin.style.display = "block";
    cajaTraseraLogin.style.opacity = "1";
  }
}
