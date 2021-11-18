import { API_URL } from './config';

const apiSettings = {
  fetchMovies: async (searchTerm, genres, page) => {
    const baseEndpoint = searchTerm
      ? `${API_URL}movie/search?searchTerm=${searchTerm}&page=${page}`
      : `${API_URL}movie/popular?page=${page}`;
    const endpoint = `${baseEndpoint}${
      genres.length > 0
        ? `&${genres.map(genre => `genre=${genre}`).join('&')}`
        : ''
    }`;
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
    const endpoint = `${API_URL}comment/${movieId}`;
    const comments = await (await fetch(endpoint)).json();
    comments.comments.reverse();
    return comments;
  },
  createComment: async comment => {
    const endpoint = `${API_URL}comment`;
    await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comment)
    });
  },
  fetchGenres: async () => {
    const endpoint = `${API_URL}genre`;
    return await (await fetch(endpoint)).json();
  }
};

export default apiSettings;
