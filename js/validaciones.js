export { campoRequerido, validarGeneral, validarEmail };

const campoRequerido = (input) => {
  if (input.value.trim().length > 0) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
};

const validarEmail(input) {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (validRegex.test(input.value)) {
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
