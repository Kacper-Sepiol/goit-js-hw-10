'use strict';

import { fetchBreeds, fetchCatByBreed } from './cat-api';

const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const catImage = document.querySelector('#cat-image');
const catName = document.querySelector('#cat-name');
const catDescription = document.querySelector('#cat-description');
const catTemperament = document.querySelector('#cat-temperament');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

function showError() {
  error.style.display = 'block';
}

function hideError() {
  error.style.display = 'none';
}

function createOption(breeds) {
  select.innerHTML = breeds
    .map(breed => `<option value="${breed.id}">${breed.name}</option>`)
    .join('');
}

function displayCatInfo(cat) {
  catImage.src = cat.url;
  catName.textContent = cat.breeds[0].name;
  catDescription.textContent = cat.breeds[0].description;
  catTemperament.textContent = `Temperament: ${cat.breeds[0].temperament}`;

  catInfo.style.display = 'block';
}

function selectCat() {
  const selectedBreedId = select.value;

  if (selectedBreedId) {
    showLoader();

    fetchCatByBreed(selectedBreedId)
      .then(cat => {
        displayCatInfo(cat);
        hideLoader();
      })
      .catch(error => {
        showError();
        hideLoader();
      });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  showLoader();
  hideError();

  fetchBreeds()
    .then(breeds => {
      createOption(breeds);
      hideLoader();
    })
    .catch(error => {
      showError();
      hideLoader();
    });

  select.addEventListener('change', selectCat);
});
