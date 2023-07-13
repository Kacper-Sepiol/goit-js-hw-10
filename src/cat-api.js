'use strict';

export { fetchBreeds };

function fetchBreeds() {
  fetch('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      console.log(response);
      return response.json();
    })
    .catch(error => {
      return console.log(error);
    });
}
