import { getFormData } from './utils.js';
import db from '../fakeDb/db.json' assert { type: 'json' };

const login = (e) => {
  e.preventDefault();
  // const data = Object.fromEntries(new FormData(e.target))
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  emailInput.classList.remove('is-invalid');
  passwordInput.classList.remove('is-invalid');

  const formData = getFormData(e);
  const userExist = db.users.find((user) => user.email === formData.email);
  if (!userExist) {
    emailInput.classList.add('is-invalid');
    return;
  }
  if (formData.password !== userExist.password) {
    passwordInput.classList.add('is-invalid');
    return;
  }
  delete userExist.password;
  localStorage.setItem('user', JSON.stringify(userExist));
  window.location.replace('../index.html');
};

document.getElementById('loginForm').addEventListener('submit', login);

// JSON
/*
const personaje = {
  id: 8,
  name: 'Adjudicator Rick',
  status: 'Dead',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'unknown',
    url: '',
  },
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/28'],
  url: 'https://rickandmortyapi.com/api/character/8',
  created: '2017-11-04T20:03:34.737Z',
};

// convertir objeto a json

const json = JSON.stringify(personaje);

// convertir json a objeto

const objeto = JSON.parse(json);
console.log(objeto);

// localStorage

// Almacenar info en el localStorage

localStorage.setItem('name', 'Ale');
localStorage.setItem('lastName', 'Busi');

// Obtener info del localSt

const userName = localStorage.getItem('lastName');
console.log(userName);

// obtener cantidad de items en Localst

console.log(localStorage.length);

// eliminar todo el localStorage

// localStorage.clear();

// eliminar un solo item

// localStorage.removeItem('name');

//// GUARDANDO UN JSON EN LOCALST
const userJson = JSON.stringify(db.users[0]);

localStorage.setItem('user', userJson);

// OBTENIENDO UN JSON DESDE EL LOCALST

const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));

console.log(userFromLocalStorage);
*/
