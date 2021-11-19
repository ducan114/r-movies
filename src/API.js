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
    const resp = await fetch(endpoint);
    if (resp.status >= 400) throw new Error('Movie Not Found');
    return await resp.json();
  },
  fetchActor: async actorId => {
    const endpoint = `${API_URL}actor/${actorId}/detail`;
    const resp = await fetch(endpoint);
    if (resp.status >= 400) throw new Error('Actor Not Found');
    return await resp.json();
  },
  fetchComments: async movieId => {
    const endpoint = `${API_URL}comment/${movieId}`;
    const resp = await fetch(endpoint);
    if (resp.status >= 400) return [];
    const comments = await resp.json();
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
