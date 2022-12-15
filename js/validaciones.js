export { campoRequerido, validarGeneral, validarEmail, validarContraseña };

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
  let decimal =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (input.value.match(decimal)) {
    return true;
  } else {
    alert("Introduzca una contraseña válida");
    return false;
  }
};

const validarGeneral = (
  campoNombre,
  campoApellido,
  campoEmail,
  campoContraseña
) => {
  let alerta = document.querySelector("#msjAlerta");
  if (
    campoRequerido(campoNombre) &&
    campoRequerido(campoApellido) &&
    campoRequerido(campoEmail) &&
    campoRequerido(campoContraseña)
  ) {
    alerta.className = "alert alert-danger my-3 d-none";
    return true;
  } else {
    alerta.className = "alert alert-danger my-3";
    return false;
  }
};
