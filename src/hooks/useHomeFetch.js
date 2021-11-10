import { useState, useEffect } from 'react';
//API
import API from '../API';
//Helpers
import { isPersistedState } from '../helpers';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [homeState, setHomeState] = useState(initialState);
  const [searchState, setSearchState] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMovies = async (setState, page, searchTerm = '') => {
    try {
      setLoading(true);
      setError(false);

      const movies = await API.fetchMovies(searchTerm, page);

      setState(prev => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : movies.results
      }));
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  //Initial render and search
  useEffect(() => {
    if (!searchTerm) {
      const sessionState = isPersistedState('homeState');
      if (sessionState) {
        setHomeState(sessionState);
        setLoading(false);
        setError(false);
        return;
      }

      setHomeState(initialState);
      fetchMovies(setHomeState, 1);
    }

    setSearchState(initialState);
    fetchMovies(setSearchState, 1, searchTerm);
  }, [searchTerm]);

  //Load more
  useEffect(() => {
    if (!isLoadingMore) return;
    if (!searchTerm) fetchMovies(setHomeState, homeState.page + 1);
    else fetchMovies(setSearchState, searchState.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [homeState.page, searchTerm, isLoadingMore, searchState.page]);

  //Write to sessionStorage
  useEffect(() => {
    if (!searchTerm && !error && !loading) {
      sessionStorage.setItem('homeState', JSON.stringify(homeState));
    }
  }, [homeState, searchTerm, error, loading]);

  return {
    homeState,
    searchState,
    loading,
    error,
    setIsLoadingMore,
    searchTerm,
    setSearchTerm
  };
};
