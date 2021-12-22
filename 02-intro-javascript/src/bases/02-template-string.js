// template string

const nombre = "Eduardo";
const apellido = "Rodríguez";

// const nombreCompleto = nombre + " " + apellido;

const nombreCompleto = `
 ${nombre}
  ${apellido}
  ${4 * 7}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
  return "Hola " + nombre;
}

console.log(` Este es un texto: ${getSaludo(nombreCompleto)}`);
