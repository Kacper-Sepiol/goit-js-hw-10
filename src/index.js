'use strict';

import axios from 'axios';
import { fetchBreeds } from './cat-api';

let catBreeds = [];

axios.defaults.headers.common['x-api-key'] =
  'live_VmDtYrbpf1ukWdNjYyiTKw9CRmmlBLZ8W01P36GtuxdccK2dNzVBnrdDdch5MJgS';

fetchBreeds()
  .then(cats => catBreeds.push(cats))
  .catch(error => console.log(error));
