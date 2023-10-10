// Funciones de tiempo
// const logMath = () => {
//   console.log(Math.random());
// };

// const repeticion = setInterval(logMath, 1000);

// const stopInterval = () => {
//   clearInterval(repeticion);
//   console.log('Repeticion ha muerto');
// };

// setTimeout(() => alert('holis'), 4000);

// DOM

// document.body.innerHTML = '<h1>Hola Mundo</h1>';
// document.body.innerText = '<h1>Hola Mundo</h1>';

// Seleccionando elementos desde js

// console.log(document.getElementById('elh3'));
// const mish = document.getElementsByClassName('elh2');
// console.log((mish[0].innerHTML = 'test'));
// console.log(document.getElementsByTagName('div'));
// console.log(document.querySelector('h3'));
// console.log(document.querySelectorAll('.elh2'));

// const printCardToDocument = (personajes) => {
//   personajes.map((personaje) => {
//     let card = document.createElement('div');
//     card.classList = 'card m-3 col-11 col-lg-3 g-0';
//     card.innerHTML = `
//       <img src="${personaje.image}" class="card-img-top img-fluid" alt="...">
//       <div class="card-body">
//         <h5 class="card-title">${personaje.name}</h5>
//       </div>
//     `;
//     console.log(card);
//     document.getElementById('contenedorPersonajes').appendChild(card);
//   });
// };

// const getData = async () => {
//   try {
//     const response = await fetch('https://rickandmortyapi.com/api/character');
//     const { results } = await response.json();
//     console.log(results);
//     printCardToDocument(results);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// getData();

// Añadir nodos

const myp = document.createElement('p');
myp.innerText = 'soy el p desde js';
myp.classList = 'elPe mt-2';
console.log(myp);
document.body.appendChild(myp);
