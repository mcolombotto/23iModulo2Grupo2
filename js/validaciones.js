const campoRequerido = (input) => {
  if (input.value.trim().length > 0) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
};

const validarEmail = (input) => {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (validRegex.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
};

const validarContraseña = (input) => {
  let regPass = /^(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  if (regPass.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
};

const validarContraseña2 = (input) => {
  let contraseñaRegistro = document.getElementById("contraseñaRegistro");
  let contraseñaRegistro2 = document.getElementById("contraseñaRegistro2");
  if (contraseñaRegistro.value === contraseñaRegistro2.value) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
};

const validarGeneral = (
  campoNombre,
  campoApellido,
  campoEmail,
  campoContraseña,
  campoContraseña2
) => {
  let alerta = document.querySelector("#msjAlerta");
  if (
    campoRequerido(campoNombre) &&
    campoRequerido(campoApellido) &&
    validarEmail(campoEmail) &&
    validarContraseña(campoContraseña) &&
    validarContraseña2(campoContraseña2)
  ) {
    alerta.className = "alert alert-danger my-3 d-none";
    return true;
  } else {
    alerta.className = "alert alert-danger my-3";
    return false;
  }
};

export {
  campoRequerido,
  validarGeneral,
  validarEmail,
  validarContraseña,
  validarContraseña2,
};
