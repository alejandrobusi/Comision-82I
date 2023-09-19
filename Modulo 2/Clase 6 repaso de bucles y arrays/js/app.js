// let i = 0;
// while (i < 5) {
//   console.log('Estamos en el bucle');
//   i++;
// }

// do {
//   console.log('dooooowhile');
//   i++;
// } while (i > 5);

// for (let i = 0; i < 5; i++) {
//   console.log('El for esss');
// }

// const inputUser = parseInt(prompt('Ingresa un numero del 1 al 50'));

// if (!isNaN(inputUser) && inputUser <= 50) {
//   for (let i = 1; i <= inputUser; i++) {
//     for (let e = 1; e <= i; e++) {
//       document.write(e);
//     }
//     document.write('<br>');
//   }
// }

// const textUser = prompt('Ingresa una frase').toLowerCase();

// let vocales = '';

// for (let i = 0; i < textUser.length; i++) {
//   if (
//     textUser[i] === 'a' ||
//     textUser[i] === 'e' ||
//     textUser[i] === 'i' ||
//     textUser[i] === 'o' ||
//     textUser[i] === 'u'
//   ) {
//     document.write(textUser[i]);
//   }
// }

//------arrays
const alumnos = ['dani', 'jose', 'miguel', 'guille', 'pau', 'martin'];
let otrosAlumnos = ['Fatima', 'pilar'];
// console.log(alumnos[alumnos.length - 1]);

// for (let index = 0; index < alumnos.length; index++) {
//   console.log(alumnos[index]);
// }

//---agregar elementos a un array

// alumnos.push('ale');

//--- reemplazar elementos
// alumnos[0] = 'Richard';

//--- agregar nuevos elementos. o tambien reemplazar un elemento mediante el indice
// alumnos.splice(0, 2, 'charly');

//--- eliminar elementos

// alumnos.splice(1, 1);

//----- eliminar el ultimo valor
//alumnos.pop();

//---- eliminar primer elemento de un array
// alumnos.shift();
//----agregar un elemento al principio

// alumnos.unshift('carlos');
// console.log(alumnos);

//----unir dos arrays
/*
const nuevoArr = alumnos.concat(otrosAlumnos);
console.log(nuevoArr.reverse());

//--- crear copia superficial del array teniendo el cuenta el inicio y el fin.

const newArr = alumnos.slice(0, 4);

console.log(newArr);

//----------- operadores ternarios

const active = true;
const activado2 = 'heyy';
// let isActive = active ? 'activado' : 'desactivado';
// let isActive = (active && 'activado') || 'no paso nada';
let isActive = activado2 || 'no lo se rick';

// if (active) {
//   isActive = 'activado';
// } else {
//   isActive = 'desactivado';
// }

console.log(isActive);
*/
//---functions

function saludar(name = 'Amigo') {
  alert(`Hola ${name}!`);
}

function suma(a, b) {
  let resultado = a + b;
  return resultado;
}

const num1 = parseInt(prompt('ingresa el primer numero'));
const num2 = parseInt(prompt('ingresa el segundo numero'));

const result = suma(num1, num2);
console.log(result);
