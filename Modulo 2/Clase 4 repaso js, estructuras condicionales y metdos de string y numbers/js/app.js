function test() {
  alert(name);
}
// de una sola linea
/*
texto 
en 
varias 
lineas
*/
let name = 'Alejandro';
let arr = ['ale', 'jose', 'guille'];
let age = 30;
let dni;
let onOff = false;
document.write(name);
console.log(name);

dni = 38999009;

const pi = 3.14;

age++;

// let num1 = 10;
// let num2 = '10';
// let num3 = 100;

// if (num1 === num2 || !(num1 === num3)) {
//   console.log('entra por true');
// } else {
//   console.log('entra por false');
// }

// let inputUser = prompt('ingresa el primer numero');
// let num1 = parseInt(inputUser);
// console.log(num1);
// let num2 = 12;

// if (!isNaN(num1)) {
//   if (num1 == num2) {
//     alert('los numeros son iguales');
//   } else {
//     alert('los numeros no son iguales');
//   }
// } else if (inputUser == null) {
//   alert('cancelando la operación...');
// } else {
//   alert('Sol puedes ingresar numeros');
// }

let estacion = prompt('ingresa la estacion de el año');

switch (estacion) {
  case 'primavera':
    alert('Bien loco, es muy buena estacion');
    break;

  case 'invierno':
    alert('eeee masomeno');
    break;

  default:
    alert('no coincide con nada loco');
    break;
}
