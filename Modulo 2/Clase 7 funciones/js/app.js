/*
//-------Funcion
//------declarativas
const name = 'Ale';
const lastName = 'Busi';

function saludar(nombre = 'Amigo', apellido = 'Querido') {
  alert(`Hola ${nombre} ${apellido}`);
}
console.log(typeof saludar);
// saludar(name, lastName);

function suma() {
  const num1 = parseInt(document.getElementById('num1').value);
  const num2 = parseInt(document.getElementById('num2').value);
  let resultado = num1 + num2;
  alert(resultado);
}

// let res = suma();
// alert(res);

//------Anonimas

const resta = function (a, b) {
  return a - b;
};

const result = resta(6, 3);
console.log(result);
//------Funciones flecha

// const mult = (a, b) => {
//  const resultado = a * b;
//   return resultado;
// };

// const mult = (a, b) => a * b;

const mult = (a) => a * 5;

const resultMult = mult(2);
console.log(resultMult);

//---- crear funcion dinamica con operador ternario

let age = prompt('ingresa tu edad');

const wellcome =
  age >= 18
    ? (name) => alert(`${name}, Bienvenido!`)
    : (name) => alert(`${name}, que lastimama, nos vemos en unos años`);

console.log(wellcome);

const test = age >= 18 ? 'Bienvenido' : 'Nos vemos';
*/

const text = 'heyy';
if (true) {
  alert(text);
}
console.log(text);
