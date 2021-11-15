import { SEARCH_BASE_URL, POPULAR_BASE_URL, API_URL } from './config';

const apiSettings = {
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}?searchTerm=${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}?page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async movieId => {
    const endpoint = `${API_URL}movie/${movieId}/detail`;
    return await (await fetch(endpoint)).json();
  },
  fetchActor: async actorId => {
    const endpoint = `${API_URL}actor/${actorId}/detail`;
    return await (await fetch(endpoint)).json();
  },
  fetchComments: async movieId => {
    const endpoint = `${API_URL}comments/${movieId}`;
    return await (await fetch(endpoint)).json();
  },
  createComment: async comment => {
    const endpoint = `${API_URL}comments`;
    await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comment)
    });
  }
};

export default apiSettings;
