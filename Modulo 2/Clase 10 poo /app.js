/*
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/
const cityList = () => {
  let cityArr = [];
  let stopFor = false;
  for (let i = 0; stopFor === false; i++) {
    let inputUser = prompt(
      'Ingresa nombre de ciudades. para finalizar pulse cancelar o ingrese 0'
    );
    if (inputUser == null || inputUser == 0) {
      stopFor = true;
      document.write(`*****La longitud de el array es ${cityArr.length}`);
      document.write(`*****El primer item es es ${cityArr[0]}`);
      document.write(`*****El tercer item es es ${cityArr[2]}`);
      document.write(`*****El Utimo item es es ${cityArr[cityArr.length - 1]}`);
      cityArr.push('paris');
      document.write(`*****El segundo item es es ${cityArr[1]}`);
      cityArr.splice(1, 1, 'Barcelona');
      console.log(cityArr);
    } else {
      cityArr.push(inputUser);
    }
  }
};

// Objetos

const auto = {
  marca: 'Peugeot',
  modelo: '208gti',
  color: 'nigga',
  testDelete: true,
  encender: () => {
    alert('encendiendo el auto señor');
  },
};

// console.log(auto.marca);
// console.log(auto['marca']);

// auto.color = 'rojo';

// delete auto.testDelete;

// auto.esFull = true;
// console.log(auto);

// for (const key in auto) {
//   if (auto.hasOwnProperty(key)) {
//     console.log(auto[key]);
//   }
// }

let products = [
  {
    id: 1232,
    name: 'Leche',
    price: 120,
    categories: ['familiar', 'comida'],
  },
  {
    id: 1232,
    name: 'Arroz',
    price: 80,
    categories: ['familiar', 'comida'],
  },
  {
    id: 3442,
    name: 'Lavadora',
    price: 7800,
    categories: ['electrodomésticos'],
  },
];

// products.forEach((product) => {
//   console.group(`ID: ${product.id}`);
//   console.log(`Nombre: ${product.name}`);
//   console.log(`Precio: ${product.price}`);
//   console.log(`Categoria: ${product.categories.join(' - ')}`);
//   console.groupEnd();
// });

// formas de crear objetos

// notacion literal

const auto2 = {
  marca: 'Peugeot',
  modelo: '208gti',
  color: 'nigga',
  testDelete: true,
  encender: () => {
    alert(`encendiendo el auto`);
  },
};

// funcion constructora

function Persona(nombre, apellido, edad) {
  this.name = nombre;
  this.lastName = apellido;
  this.age = edad;
  this.saludo = () => {
    alert(`hola ${this.name}`);
  };
}

const persona1 = new Persona('Ale', 'Busi', 29);
const persona2 = new Persona('Guille', 'Alonso', 26);

// constructor object
const persona3 = new Object();
persona3.name = 'Dani';

// objecct.create

const persona4 = Object.create(persona1);
persona4.name = 'charly';

//Comparando objetos
const ab = 'ale';
const bc = 'ale';
console.log(ab === bc);

const personaA = { name: 'juan' };
const personaB = { ...personaA };

console.log(personaA === personaB);

personaB.name = 'test';

console.log(personaA);
console.log(personaB);

// objetos globales
console.log(Math);
const fecha = new Date();
console.log(fecha.getDate());
console.log(fecha.getDay());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
