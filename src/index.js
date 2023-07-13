'use strict';

import axios from 'axios';
import { fetchBreeds } from './cat-api';

const selectCats = document.querySelector('.breed-select');

let catBreeds = [];

axios.defaults.headers.common['x-api-key'] =
  'live_VmDtYrbpf1ukWdNjYyiTKw9CRmmlBLZ8W01P36GtuxdccK2dNzVBnrdDdch5MJgS';

fetchBreeds()
  .then(cats => {
    catBreeds.push(cats);
    renderSelect(cats);
  })
  .catch(error => console.log(error));
console.log(catBreeds);

function renderSelect(cats) {
  const markup = cats
    .map((id, name) => {
      return `<option value="${id}">${name}</option>`;
    })
    .join('');
  selectCats.innerHTML = markup;
}
