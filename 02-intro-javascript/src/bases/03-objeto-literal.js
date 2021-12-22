const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 546466,
    lat: 45.45645,
    lng: 145.45645,
  },
};

console.log({ persona });
console.table({ persona });

// const persona2 = persona;       //copia referencia a la variable, no contenido. al cambiar a persona cambia persona2

const persona2 = { ...persona };   //crea una copia, mo referencia.

persona2.nombre = "Peter";

console.log({ persona });
console.log({ persona2 });
console.table({ persona });
console.table({ persona2 });
