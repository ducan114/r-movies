const API_URL = 'https://tmdb-to-mydb.herokuapp.com/api/v1/external/';

const SEARCH_BASE_URL = `${API_URL}movie/search`;
const POPULAR_BASE_URL = `${API_URL}movie/popular`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
};
