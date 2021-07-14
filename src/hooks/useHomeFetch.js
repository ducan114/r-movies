import { useState, useEffect } from 'react';
//API
import API from '../API';
//Helpers
import helper from '../helpers';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setLoading(true);
      setError(false);
      const movies = await API.fetchMovies(searchTerm, page);

      setState((prev) => ({
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
    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);
  //Load more
  useEffect(() => {
    if (!isLoadingMore) return;
    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [state.page, searchTerm, isLoadingMore]);

  return { state, loading, error, setIsLoadingMore, searchTerm, setSearchTerm };
};
