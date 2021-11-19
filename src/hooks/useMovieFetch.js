import { useState, useEffect } from 'react';
// API
import API from '../API';
// Helpers
import { isPersistedState } from '../helpers';

export const useMovieFetch = movieId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [comments, setComments] = useState({});
  const [loadingComments, setLoadingComments] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoadingComments(true);
        setError();
        setComments(await API.fetchComments(movieId));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoadingComments(false);
      }
    };

    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError();

        const movie = await API.fetchMovie(movieId);

        setState({
          ...movie
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const sessionState = isPersistedState(`movie-${movieId}`);

    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      setError();
    } else fetchMovie();

    fetchComments();
  }, [movieId]);

  // Write to sessionStorage.
  useEffect(() => {
    if (loading || error) return;
    sessionStorage.setItem(`movie-${movieId}`, JSON.stringify(state));
  }, [movieId, state, loading, error]);

  return {
    state,
    loading,
    error,
    comments,
    loadingComments,
    setError,
    setComments
  };
};
