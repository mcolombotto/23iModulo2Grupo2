const validarEmailLogin = (input) => {
  let validRegex2 =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (validRegex2.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
};

const validarContraseña3 = (input) => {
  let regPass2 = /^(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  if (regPass2.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
};


export { validarEmailLogin, validarContraseña3 };
