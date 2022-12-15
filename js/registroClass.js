export class Cuenta {
  constructor(
    parametroNombre,
    parametroApellido,
    parametroEmail,
    parametroContraseña
  ) {
    this.nombre = parametroNombre;
    this.apellido = parametroApellido;
    this.email = parametroEmail;
    this.contraseña = parametroContraseña;
  }
  get mostrarNombre() {
    return this.name
  }
  get mostrarApellido() {
    return this.apellido
  }
  get mostrarEmail() {
    return this.email
  }
  get mostrarContraseña() {
    return this.contraseña
  }
}

