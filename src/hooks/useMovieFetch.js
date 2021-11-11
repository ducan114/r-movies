import { useState, useEffect } from 'react';
// API
import API from '../API';
// Helpers
import { isPersistedState } from '../helpers';

export const useMovieFetch = movieId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
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

    const sesstionState = isPersistedState(`movie-${movieId}`);
    if (sesstionState) {
      setState(sesstionState);
      setLoading(false);
      setError();
      return;
    }

    fetchMovie();
  }, [movieId]);

  //Write to sessionState
  useEffect(() => {
    if (loading || error) return;
    sessionStorage.setItem(`movie-${movieId}`, JSON.stringify(state));
  }, [movieId, state, loading, error]);

  return { state, loading, error };
};
