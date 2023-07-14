'use strict';

export { fetchBreeds, fetchCatByBreed };
import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_VmDtYrbpf1ukWdNjYyiTKw9CRmmlBLZ8W01P36GtuxdccK2dNzVBnrdDdch5MJgS';

function fetchBreeds() {
  return axios
    .get(
      'https://api.thecatapi.com/v1/breeds?api_key=live_VmDtYrbpf1ukWdNjYyiTKw9CRmmlBLZ8W01P36GtuxdccK2dNzVBnrdDdch5MJgS'
    )
    .then(response => response.data)
    .catch(error => {
      return console.log(error);
    });
}

function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data[0])
    .catch(error => {
      return console.log(error);
    });
}
