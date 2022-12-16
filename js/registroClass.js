export class User {
  constructor(
    parametroNombre,
    parametroApellido,
    parametroEmail,
    parametroContraseña,
    parametroContraseña2
  ) {
    this.nombre = parametroNombre;
    this.apellido = parametroApellido;
    this.email = parametroEmail;
    this.contraseña = parametroContraseña;
    this.contraseña2 = parametroContraseña2;
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
  get mostrarContraseña2() {
    return this.contraseña2
  }
}

