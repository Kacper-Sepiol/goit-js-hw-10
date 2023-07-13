'use strict';

import { fetchBreeds } from './cat-api';

const selectCats = document.querySelector('.breed-select');

let catBreeds = [];

fetchBreeds()
  .then(cats => catBreeds.push(cats))
  .catch(error => console.log(error));
