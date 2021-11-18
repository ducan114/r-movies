import { useState, useEffect } from 'react';
// API
import API from '../API';
// Helpers
import { isPersistedState, isEmptyObject } from '../helpers';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [genres, setGenres] = useState({});
  const [availableGenres, setAvailableGenres] = useState([]);
  const [homeState, setHomeState] = useState(initialState);
  const [searchState, setSearchState] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMovies = async (setState, page, genres = [], searchTerm = '') => {
    try {
      setLoading(true);
      setError();

      const movies = await API.fetchMovies(searchTerm, genres, page);

      setState(prev => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : movies.results
      }));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchAvailableGenres = async () => {
    const genres = (await API.fetchGenres()).sort((a, b) =>
      a.name < b.name ? -1 : a.name === b.name ? 0 : 1
    );
    setAvailableGenres(genres);
  };

  // Fetch available genres on initial render.
  useEffect(() => {
    fetchAvailableGenres();
  }, []);

  // Initial render and search.
  useEffect(() => {
    if (!searchTerm && isEmptyObject(genres)) {
      const sessionState = isPersistedState('homeState');

      if (sessionState) {
        setHomeState(sessionState);
        setLoading(false);
        setError();
        return;
      }

      setHomeState(initialState);
      fetchMovies(setHomeState, 1);
      return;
    }

    setSearchState(initialState);
    fetchMovies(setSearchState, 1, Object.keys(genres), searchTerm);
  }, [searchTerm, genres]);

  // Load more.
  useEffect(() => {
    if (!isLoadingMore) return;
    if (!searchTerm && isEmptyObject(genres))
      fetchMovies(setHomeState, homeState.page + 1);
    else
      fetchMovies(
        setSearchState,
        searchState.page + 1,
        Object.keys(genres),
        searchTerm
      );
    setIsLoadingMore(false);
  }, [homeState.page, searchTerm, isLoadingMore, searchState.page, genres]);

  // Write to sessionStorage.
  useEffect(() => {
    if (!searchTerm && isEmptyObject(genres) && !error && !loading) {
      sessionStorage.setItem('homeState', JSON.stringify(homeState));
    }
  }, [homeState, searchTerm, genres, error, loading]);

  return {
    homeState,
    searchState,
    loading,
    error,
    setIsLoadingMore,
    searchTerm,
    setSearchTerm,
    genres,
    setGenres,
    availableGenres
  };
};
