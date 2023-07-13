'use strict';

export { fetchBreeds };

function fetchBreeds() {
  return fetch(
    'https://api.thecatapi.com/v1/breeds?api_key=live_VmDtYrbpf1ukWdNjYyiTKw9CRmmlBLZ8W01P36GtuxdccK2dNzVBnrdDdch5MJgS'
  )
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
