const auto = {
  marca: 'Fiat',
  modelo: 'Punto',
  PotenciaHp: [120, 170],
  esFull: false,
  encender: () => {
    alert('test');
  },
};
/*
console.log(auto.marca);
console.log(auto['modelo']);

// Agregar propiedades a un objeto

auto.precio = 7000;

// Eliminar propiedad de un objeto

delete auto.precio;

// Editar una propiedad

auto.isFull = true;
console.log(auto);

let arr = ['ale'];
*/
for (const key in auto) {
  if (auto.hasOwnProperty(key)) {
    console.log(`${key}: ${auto[key]}`);
  }
}

let llaves = Object.values(auto);
console.log(llaves);

for (let i = 0; i < llaves.length; i++) {
  console.log(llaves[i]);
}

auto.encender();
